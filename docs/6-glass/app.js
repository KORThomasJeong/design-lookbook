/* docs/6-glass/app.js — 6 · Glass 데모 "링(Ring)" 공용 스크립트
 * §6.5 large title 접힘 · §7 링 카운트업/진입 · §6.7 시트·알림 · §6.8 배너
 * §6.9 세그먼트 슬라이드 · §6.10 스위치·슬라이더. 모션 시간은 SPEC §7 토큰과 일치. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('ko-KR'); };

  /* §6.5 네비바: 스크롤 시 large title → 인라인 타이틀 접힘 + 하단 헤어라인 */
  function bindNav() {
    var scroller = document.querySelector('.scroll');
    var nav = document.querySelector('.nav');
    if (!scroller || !nav) return;
    var lt = scroller.querySelector('.large-title');
    var trigger = 12;
    function onScroll() {
      var t = lt ? lt.offsetHeight - 12 : 12;
      nav.classList.toggle('scrolled', scroller.scrollTop > Math.max(trigger, t));
    }
    scroller.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* §7 큰 숫자 카운트업 */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var from = parseFloat(el.getAttribute('data-from')) || 0;
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var render = function (v) {
      el.textContent = dec ? v.toFixed(dec) : fmt(v);
    };
    if (reduce) { render(target); return; }
    var dur = 500, t0 = null;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      render(from + (target - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* §7 활동 링: stroke-dashoffset 채움 애니메이션 */
  function fillRings() {
    document.querySelectorAll('.ring-arc').forEach(function (arc) {
      var pct = parseFloat(arc.getAttribute('data-pct')) || 0;
      var len = arc.getTotalLength ? arc.getTotalLength() : 2 * Math.PI * (+arc.getAttribute('r'));
      arc.style.strokeDasharray = len;
      arc.style.strokeDashoffset = len;
      var off = len * (1 - Math.min(pct, 100) / 100);
      if (reduce) { arc.style.transition = 'none'; arc.style.strokeDashoffset = off; return; }
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { arc.style.strokeDashoffset = off; });
      });
    });
  }

  /* §6.9 세그먼트 컨트롤 슬라이드 */
  function bindSegments() {
    document.querySelectorAll('[data-segment]').forEach(function (seg) {
      var pill = seg.querySelector('.segment-pill');
      var opts = Array.prototype.slice.call(seg.querySelectorAll('.segment-opt'));
      var n = opts.length;
      if (pill) pill.style.width = 'calc((100% - ' + (8) + 'px) / ' + n + ')';
      function select(i) {
        opts.forEach(function (o, k) {
          o.classList.toggle('is-active', k === i);
          o.setAttribute('aria-selected', k === i ? 'true' : 'false');
        });
        if (pill) pill.style.transform = 'translateX(' + (i * 100) + '%)';
        if (seg.dataset.onchange && window[seg.dataset.onchange]) window[seg.dataset.onchange](i, seg);
      }
      opts.forEach(function (o, i) { o.addEventListener('click', function () { select(i); }); });
      var init = opts.findIndex(function (o) { return o.classList.contains('is-active'); });
      select(init < 0 ? 0 : init);
    });
  }

  /* §6.10 스위치 토글 */
  function bindSwitches() {
    document.querySelectorAll('.switch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        var on = sw.getAttribute('aria-checked') === 'true';
        sw.setAttribute('aria-checked', on ? 'false' : 'true');
      });
    });
  }

  /* §6.10 슬라이더 드래그 */
  function bindSliders() {
    document.querySelectorAll('.slider').forEach(function (sl) {
      var track = sl.querySelector('.slider-track');
      var fill = sl.querySelector('.slider-fill');
      var knob = sl.querySelector('.slider-knob');
      function set(pct) {
        pct = Math.max(0, Math.min(100, pct));
        fill.style.width = pct + '%';
        knob.style.left = pct + '%';
        sl.setAttribute('aria-valuenow', Math.round(pct));
      }
      set(parseFloat(sl.getAttribute('aria-valuenow')) || 60);
      function fromEvent(e) {
        var r = track.getBoundingClientRect();
        var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        set((x / r.width) * 100);
      }
      function down(e) {
        fromEvent(e);
        function move(ev) { fromEvent(ev); ev.preventDefault(); }
        function up() {
          document.removeEventListener('pointermove', move);
          document.removeEventListener('pointerup', up);
        }
        document.addEventListener('pointermove', move);
        document.addEventListener('pointerup', up);
      }
      sl.addEventListener('pointerdown', down);
      sl.addEventListener('keydown', function (e) {
        var cur = parseFloat(sl.getAttribute('aria-valuenow')) || 0;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { set(cur + 5); e.preventDefault(); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { set(cur - 5); e.preventDefault(); }
      });
    });
  }

  /* §6.7 바텀시트 */
  window.gSheet = {
    open: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      var frame = document.querySelector('.frame');
      if (!sheet) return;
      sheet.setAttribute('data-open', 'true');
      if (dim) dim.classList.add('open');
      if (frame) frame.setAttribute('data-sheet-open', '');
      var f = sheet.querySelector('button, a, input, [tabindex]');
      if (f) f.focus();
    },
    close: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      var frame = document.querySelector('.frame');
      if (!sheet) return;
      sheet.removeAttribute('data-open');
      if (dim) dim.classList.remove('open');
      if (frame) frame.removeAttribute('data-sheet-open');
    }
  };

  /* §6.7 알림(alert) */
  window.gAlert = {
    open: function (id) {
      var a = document.getElementById(id);
      if (a) { a.classList.add('open'); var b = a.querySelector('.alert-btn'); if (b) b.focus(); }
    },
    close: function (id) {
      var a = document.getElementById(id);
      if (a) a.classList.remove('open');
    }
  };

  /* §6.8 상단 배너 (3초 자동 소멸) */
  window.gBanner = function (message) {
    var host = document.querySelector('.frame') || document.body;
    var b = host.querySelector('.banner');
    if (!b) {
      b = document.createElement('div');
      b.className = 'banner';
      b.setAttribute('role', 'status');
      b.innerHTML = '<svg class="banner-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg><span class="t-subhead"></span>';
      host.appendChild(b);
    }
    b.querySelector('span').textContent = message;
    clearTimeout(b._t);
    requestAnimationFrame(function () { b.classList.add('show'); });
    b._t = setTimeout(function () { b.classList.remove('show'); }, 3000);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var sheet = document.querySelector('.sheet[data-open="true"]');
    if (sheet) { window.gSheet.close(sheet.id); return; }
    var alert = document.querySelector('.alert-scrim.open');
    if (alert) window.gAlert.close(alert.id);
  });

  function init() {
    bindNav();
    document.querySelectorAll('[data-count]').forEach(countUp);
    fillRings();
    bindSegments();
    bindSwitches();
    bindSliders();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
