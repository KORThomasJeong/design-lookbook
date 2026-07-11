/* docs/11-asphalt/app.js — 프리셋 11 "Asphalt" 데모 "가자(Gaja)" 공용 스크립트
 * 절제된 인터랙션만: 앱바 스크롤 헤어라인, 토스트, 바텀시트/모달, 세그먼트, 선택.
 * 모션 물성은 CSS(tokens.css/app.css)가 담당한다. */
(function () {
  'use strict';

  /* 스크롤 시 앱바 하단 헤어라인 (§6.5) */
  function bindAppbarShadow() {
    var scroll = document.querySelector('.scroll');
    var bar = document.querySelector('.appbar');
    if (!scroll || !bar) return;
    var onScroll = function () { bar.classList.toggle('scrolled', scroll.scrollTop > 4); };
    scroll.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* 토스트 (§6.8) — 4초 후 자동 소멸 */
  var toastTimer = null;
  window.gToast = function (msg, opts) {
    opts = opts || {};
    var el = document.getElementById('toast');
    if (!el) return;
    el.innerHTML = '';
    if (opts.success) {
      el.insertAdjacentHTML('beforeend',
        '<svg class="toast-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19 6.5"/></svg>');
    }
    var span = document.createElement('span');
    span.textContent = msg;
    el.appendChild(span);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 4000);
  };

  /* 바텀시트 / 딤 (§6.7) */
  window.gOpenSheet = function (id) {
    var sheet = document.getElementById(id);
    var dim = document.getElementById('dim');
    if (sheet) sheet.classList.add('open');
    if (dim) dim.classList.add('open');
  };
  window.gCloseSheet = function (id) {
    var sheet = document.getElementById(id);
    var dim = document.getElementById('dim');
    if (sheet) sheet.classList.remove('open');
    if (dim) dim.classList.remove('open');
  };

  /* 확인 모달 (§6.7) */
  window.gOpenModal = function (id) {
    var m = document.getElementById(id);
    var dim = document.getElementById('dim');
    if (m) m.classList.add('open');
    if (dim) dim.classList.add('open');
  };
  window.gCloseModal = function (id) {
    var m = document.getElementById(id);
    var dim = document.getElementById('dim');
    if (m) m.classList.remove('open');
    if (dim) dim.classList.remove('open');
  };

  /* 세그먼트 토글 (§6.9) */
  function bindSegments() {
    document.querySelectorAll('.segment').forEach(function (seg) {
      var btns = seg.querySelectorAll('button');
      btns.forEach(function (b, i) {
        b.addEventListener('click', function () {
          seg.setAttribute('data-active', String(i));
          btns.forEach(function (x, j) { x.setAttribute('aria-selected', String(i === j)); });
          if (typeof window.gOnSegment === 'function') window.gOnSegment(seg, i);
        });
      });
    });
  }

  /* 차량 옵션 선택 (§9 screen-2) */
  function bindOptions() {
    var opts = document.querySelectorAll('.opt');
    if (!opts.length) return;
    opts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        opts.forEach(function (x) { x.setAttribute('aria-pressed', String(x === opt)); });
        var fare = opt.getAttribute('data-fare');
        var cta = document.getElementById('cta-fare');
        if (fare && cta) {
          cta.textContent = fare;
          cta.parentElement && cta.parentElement.classList.add('live-update');
        }
      });
    });
  }

  function init() {
    bindAppbarShadow();
    bindSegments();
    bindOptions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
