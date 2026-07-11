/* docs/12-ink/app.js — 프리셋 12 "Ink" 데모 "정산소" 공용 스크립트
 * 모션 성격(§7): 확인이지 쇼가 아니다. 카운트업·차트 1회 드로우, 오버슈트 없음.
 * prefers-reduced-motion이면 즉시 최종값. 외부 리소스 없음. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 숫자 카운트업 (§7): KPI·잔액. data-count=목표, data-from=시작, data-prefix/suffix */
  function fmt(n) { return Math.round(n).toLocaleString('ko-KR'); }
  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-count'));
    var from = parseFloat(el.getAttribute('data-from') || '0');
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    if (isNaN(to)) return;
    if (reduce) { el.textContent = pre + fmt(to) + suf; return; }
    var dur = 400, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(from + (to - from) * eased) + suf;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = pre + fmt(to) + suf;
    }
    requestAnimationFrame(step);
  }

  /* 라인 차트 stroke-dashoffset 세팅 (§7 1회 드로우) */
  function initCharts() {
    document.querySelectorAll('.chart-draw').forEach(function (path) {
      try {
        var len = path.getTotalLength ? path.getTotalLength() : 0;
        if (len) path.style.setProperty('--dash', Math.ceil(len));
        if (reduce) { path.style.strokeDashoffset = '0'; path.style.animation = 'none'; }
      } catch (e) {}
    });
  }

  /* 토스트 (§6.8) — 우하단, 4초 자동 소멸 */
  var toastWrap;
  function ensureWrap() {
    if (!toastWrap) {
      toastWrap = document.createElement('div');
      toastWrap.className = 'toast-wrap';
      toastWrap.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastWrap);
    }
    return toastWrap;
  }
  var ICON = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    danger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>'
  };
  window.inkToast = function (msg, tone) {
    tone = tone || 'success';
    var w = ensureWrap();
    var t = document.createElement('div');
    t.className = 'toast toast-' + tone;
    t.setAttribute('role', 'status');
    t.innerHTML = (ICON[tone] || ICON.info) +
      '<span class="t-body">' + msg + '</span>' +
      '<button class="toast-close icon-btn" type="button" aria-label="닫기" style="width:24px;height:24px">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>';
    w.appendChild(t);
    function close() { t.classList.add('leaving'); setTimeout(function () { t.remove(); }, 200); }
    t.querySelector('.toast-close').addEventListener('click', close);
    setTimeout(close, 4000);
  };

  /* 클립보드 복사 → 토스트 */
  window.inkCopy = function (text, label) {
    var done = function () { window.inkToast((label || '복사했어요'), 'success'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, done);
    } else { done(); }
  };

  /* 사이드 내비 모바일 토글 */
  window.inkToggleNav = function () {
    var shell = document.querySelector('.shell');
    if (!shell) return;
    var open = shell.classList.toggle('nav-open');
    var existing = shell.querySelector('.nav-scrim');
    if (open && !existing) {
      var s = document.createElement('div');
      s.className = 'nav-scrim';
      s.addEventListener('click', window.inkToggleNav);
      shell.appendChild(s);
    } else if (!open && existing) { existing.remove(); }
  };

  /* 앱바 스크롤 그림자 */
  function initStickyBar() {
    var bar = document.querySelector('.appbar');
    var scroller = document.querySelector('.main-col') || window;
    if (!bar) return;
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      bar.classList.toggle('is-stuck', y > 4);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* 세그먼트/탭 토글 (data-seg 그룹) */
  function initSegs() {
    document.querySelectorAll('[data-seg]').forEach(function (grp) {
      grp.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        grp.querySelectorAll('button').forEach(function (x) { x.classList.toggle('is-on', x === b); });
      });
    });
    document.querySelectorAll('[data-envswitch]').forEach(function (grp) {
      grp.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        grp.querySelectorAll('button').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        if (b.classList.contains('env-test')) window.inkToast('테스트 환경으로 전환했어요', 'info');
      });
    });
  }

  /* 드로어/모달 닫기(뒤로가기) */
  window.inkBack = function () { if (history.length > 1) history.back(); else location.href = 'screen-2.html'; };

  function init() {
    document.querySelectorAll('[data-count]').forEach(countUp);
    initCharts();
    initStickyBar();
    initSegs();
    // ESC로 오버레이 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var closer = document.querySelector('[data-esc-close]');
        if (closer) closer.click();
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
