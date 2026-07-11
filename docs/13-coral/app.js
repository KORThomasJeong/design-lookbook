/* docs/13-coral/app.js — Coral 데모 "머물다(Meomulda)" 공용 스크립트
 * 앱바 스크롤 헤어라인(§6.5)·찜 하트(§7)·바텀시트(§6.7)·토스트(§6.8)·성공 전환(§7).
 * 모션 시간은 SPEC §7 토큰과 일치. 오버슈트/스프링 없음. */
(function () {
  'use strict';

  /* 앱바 스크롤 시 헤어라인 + 그림자 (§6.5) */
  function bindAppbar() {
    var scroller = document.querySelector('.scroll');
    var appbar = document.querySelector('.appbar');
    if (!scroller || !appbar) return;
    scroller.addEventListener('scroll', function () {
      appbar.classList.toggle('scrolled', scroller.scrollTop > 8);
    }, { passive: true });
  }

  /* 찜 하트 토글 (§7) — scale 1→1.2→1, fill vivid, 파티클 없음 */
  function bindHearts() {
    document.querySelectorAll('.heart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var on = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', on ? 'false' : 'true');
        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');
        window.mToast(on ? '위시리스트에서 뺐어요' : '위시리스트에 저장했어요');
      });
    });
  }

  /* 토스트 (§6.8) — 동시 1개, 3.5초 유지, 성공 체크 아이콘 */
  window.mToast = function (message) {
    var host = document.querySelector('.app') || document.body;
    var old = host.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg><span></span>';
    t.querySelector('span').textContent = message;
    host.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.style.transition = 'opacity var(--motion-base) linear';
      t.style.opacity = '0';
      setTimeout(function () { t.remove(); }, 200);
    }, 3500);
  };

  /* 바텀시트 (§6.7) — translateY(100%)→0 400ms, 딤 페이드 250ms */
  window.mSheet = {
    open: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      if (!sheet) return;
      sheet.setAttribute('data-open', 'true');
      if (dim) dim.classList.add('open');
      var f = sheet.querySelector('button, a, [tabindex]');
      if (f) f.focus();
    },
    close: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      if (!sheet) return;
      sheet.removeAttribute('data-open');
      if (dim) dim.classList.remove('open');
    }
  };
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.sheet[data-open="true"]');
    if (open) window.mSheet.close(open.id);
  });

  /* 성공 전환 (§7) — 진입 시 체크 원 pop + 패스 draw */
  function bindSuccess() {
    var el = document.querySelector('.success-block');
    if (el) requestAnimationFrame(function () { el.classList.add('success-anim'); });
  }

  function init() { bindAppbar(); bindHearts(); bindSuccess(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
