/* docs/3-jelly/app.js — Jelly 데모 "지갑(Jigap)" 공용 스크립트
 * 카운트업(§7)·앱바 스크롤 그림자(§6.5)·토스트(§6.8)·바텀시트(§6.7).
 * 모션 시간은 SPEC §7 토큰과 일치한다. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('ko-KR'); };

  /* 앱바 스크롤 시 그림자 + 타이틀 페이드인 (§6.5) */
  function bindAppbar() {
    var scroller = document.querySelector('.scroll');
    var appbar = document.querySelector('.appbar');
    if (!scroller || !appbar) return;
    scroller.addEventListener('scroll', function () {
      appbar.classList.toggle('scrolled', scroller.scrollTop > 8);
    }, { passive: true });
  }

  /* 큰 숫자 카운트업 (§7): 이전 값 → 목표 값 500ms ease-out-soft */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var from = parseFloat(el.getAttribute('data-from')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    var dur = 500, t0 = null;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* ease-out 근사 */
      el.textContent = fmt(from + (target - from) * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function bindCounts() {
    document.querySelectorAll('[data-count]').forEach(countUp);
  }

  /* 토스트 (§6.8) — 동시 1개, 3초 유지, 성공 체크 아이콘 */
  window.jToast = function (message) {
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
      t.style.transition = 'opacity var(--motion-fast) linear';
      t.style.opacity = '0';
      setTimeout(function () { t.remove(); }, 200);
    }, 3000);
  };

  /* 바텀시트 (§6.7) — 진입 300ms ease-out-soft, 딤 페이드 200ms */
  window.jSheet = {
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
    var open = document.querySelector('[data-open="true"]');
    if (open) window.jSheet.close(open.id);
  });

  function init() { bindAppbar(); bindCounts(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
