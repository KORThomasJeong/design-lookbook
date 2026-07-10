/* docs/1-frost/app.js — Frost 데모 공용 스크립트: 토스트 + 시트/모달 열고 닫기.
 * 모션 값은 SPEC §7 토큰(150/200/250ms)과 동일해야 한다. */
(function () {
  'use strict';

  var MOTION_FAST = 150; /* --motion-fast: 퇴장 */

  /* 토스트 (§6.8) — 동시 1개, 4초 유지, 아크릴 배경 */
  window.frostToast = function (message) {
    var old = document.querySelector('.toast');
    if (old) old.remove();

    var toast = document.createElement('div');
    toast.className = 'toast acrylic';
    toast.setAttribute('role', 'status');
    toast.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="10" cy="10" r="7.5"/><path d="M6.5 10.5l2.5 2.5 4.5-5"/></svg>' +
      '<span></span>';
    toast.querySelector('span').textContent = message;
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('closing');
      setTimeout(function () { toast.remove(); }, MOTION_FAST);
    }, 4000);
  };

  /* 시트/모달 (§6.7) — 진입 250ms decel, 퇴장 150ms accel */
  window.frostSheet = {
    open: function (id) {
      var sheet = document.getElementById(id);
      var scrim = document.getElementById(id + '-scrim');
      if (!sheet) return;
      sheet.classList.remove('closing');
      sheet.classList.add('open');
      if (scrim) { scrim.classList.remove('closing'); scrim.classList.add('open'); }
      var focusable = sheet.querySelector('button, input, [tabindex]');
      if (focusable) focusable.focus();
    },
    close: function (id) {
      var sheet = document.getElementById(id);
      var scrim = document.getElementById(id + '-scrim');
      if (!sheet || !sheet.classList.contains('open')) return;
      sheet.classList.add('closing');
      if (scrim) scrim.classList.add('closing');
      setTimeout(function () {
        sheet.classList.remove('open', 'closing');
        if (scrim) scrim.classList.remove('open', 'closing');
      }, MOTION_FAST);
    }
  };

  /* ESC로 열린 시트 닫기 */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.sheet.open');
    if (open) window.frostSheet.close(open.id);
  });
})();
