/* docs/16-jade/app.js — Jade 데모 포털 "누리(Nuri)" 공용 스크립트
 * GNB 스크롤 그림자(§6.5)·토스트(§6.8)·카운트업(§7)·좋아요 토글·다크 토글·폼 에러 데모.
 * 모션 시간은 SPEC §7 토큰과 일치한다. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('ko-KR'); };

  /* GNB 스크롤 시 그림자 (§6.5) */
  function bindGnb() {
    var scroller = document.querySelector('.scroll');
    var gnb = document.querySelector('.gnb');
    if (!scroller || !gnb) return;
    scroller.addEventListener('scroll', function () {
      gnb.classList.toggle('scrolled', scroller.scrollTop > 8);
    }, { passive: true });
  }

  /* 대형 숫자 카운트업 (§7): 로그인 후 대형 숫자 1곳까지만 */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    var dur = 500, t0 = null;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function bindCounts() { document.querySelectorAll('[data-count]').forEach(countUp); }

  /* 토스트 (§6.8) — 동시 1개, 3초 유지, 성공 체크 아이콘 */
  window.nToast = function (message) {
    var host = document.querySelector('.app') || document.body;
    var old = host.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
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

  /* 좋아요/구독 등 aria-pressed 토글 (§9 screen-3) */
  window.nToggle = function (btn, onMsg) {
    var on = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', on ? 'false' : 'true');
    var cnt = btn.querySelector('[data-count-val]');
    if (cnt) {
      var base = parseInt(cnt.getAttribute('data-count-val'), 10) || 0;
      cnt.textContent = fmt(on ? base : base + 1);
    }
    if (!on && onMsg) window.nToast(onMsg);
  };

  /* 체크박스 토글 */
  window.nCheck = function (el) {
    el.setAttribute('aria-checked', el.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  };

  /* 비밀번호 표시 토글 (§9 screen-4) */
  window.nEye = function (btn) {
    var input = btn.parentElement.querySelector('input');
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.setAttribute('aria-pressed', input.type === 'text' ? 'true' : 'false');
  };

  /* 다크 모드 인페이지 토글 (§9 screen-5) — preset-loader 저장소와 동기화 */
  window.nTheme = function (sw) {
    var html = document.documentElement;
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    sw.setAttribute('aria-checked', next === 'dark' ? 'true' : 'false');
    try {
      var key = 'lookbook-' + (html.getAttribute('data-preset') || '');
      var s = JSON.parse(localStorage.getItem(key) || '{}');
      s.theme = next;
      localStorage.setItem(key, JSON.stringify(s));
    } catch (e) {}
  };
  function syncThemeSwitch() {
    var sw = document.querySelector('.switch[data-theme-switch]');
    if (sw) sw.setAttribute('aria-checked', document.documentElement.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
  }

  /* 로그인 폼 에러 데모 (§8 카피, §6.2 에러 표시) */
  window.nLogin = function (e) {
    e.preventDefault();
    var form = e.target;
    var pw = form.querySelector('input[type="password"], input[data-pw]');
    var id = form.querySelector('input[data-id]');
    var field = pw ? pw.closest('.field') : null;
    if (!id.value || !pw.value || pw.value.length < 4) {
      if (field) field.classList.add('error');
      return false;
    }
    if (field) field.classList.remove('error');
    window.nToast('로그인했어요');
    return false;
  };

  function init() { bindGnb(); bindCounts(); syncThemeSwitch(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
