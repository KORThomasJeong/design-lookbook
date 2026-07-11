/* docs/8-canvas/app.js — 프리셋 8 "Canvas" 데모 "상점(Sangjeom)" 공용 스크립트
 * 절제된 모션(§7): KPI 카운트업(1회), 토스트, 우측 상세 드로어.
 * prefers-reduced-motion이면 카운트업은 즉시 최종값. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 숫자 포맷: 천 단위 콤마 */
  function fmt(n) { return Math.round(n).toLocaleString('ko-KR'); }

  /* KPI 카운트업 — data-count 요소, 페이지 로드 시 1회 (§7) */
  function countUp() {
    var els = document.querySelectorAll('[data-count]');
    els.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target)) return;
      if (reduce) { el.textContent = prefix + fmt(target) + suffix; return; }
      var dur = 250, start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3); /* ease-out */
        el.textContent = prefix + fmt(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = prefix + fmt(target) + suffix;
      }
      requestAnimationFrame(step);
    });
  }

  /* 토스트 (§6.8) */
  var host;
  function toast(msg) {
    if (!host) {
      host = document.createElement('div');
      host.className = 'toast-host';
      host.setAttribute('role', 'status');
      host.setAttribute('aria-live', 'polite');
      document.body.appendChild(host);
    }
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    host.appendChild(t);
    setTimeout(function () { t.remove(); }, 4000);
  }
  window.sjToast = toast;

  /* 우측 상세 드로어 (§6.7) */
  function openDrawer(id) {
    var scrim = document.getElementById(id);
    if (!scrim) return;
    scrim.classList.add('open');
    var dr = scrim.querySelector('.drawer');
    if (dr) dr.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(scrim) {
    scrim.classList.remove('open');
    var dr = scrim.querySelector('.drawer');
    if (dr) dr.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.sjOpenDrawer = openDrawer;

  function wire() {
    countUp();

    /* 드로어 트리거: [data-drawer="id"] */
    document.querySelectorAll('[data-drawer]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openDrawer(el.getAttribute('data-drawer'));
      });
    });
    /* 드로어 닫기: scrim 클릭 or [data-drawer-close] */
    document.querySelectorAll('.drawer-scrim').forEach(function (scrim) {
      scrim.addEventListener('click', function (e) {
        if (e.target === scrim) closeDrawer(scrim);
      });
      scrim.querySelectorAll('[data-drawer-close]').forEach(function (btn) {
        btn.addEventListener('click', function () { closeDrawer(scrim); });
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.drawer-scrim.open').forEach(closeDrawer);
      }
    });

    /* 토스트 트리거: [data-toast="메시지"] */
    document.querySelectorAll('[data-toast]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (el.tagName === 'BUTTON' && el.type !== 'submit') e.preventDefault();
        toast(el.getAttribute('data-toast'));
      });
    });

    /* 필터 칩 토글 (단일 활성) */
    document.querySelectorAll('[data-chip-group]').forEach(function (group) {
      group.querySelectorAll('.chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          group.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-active'); });
          chip.classList.add('is-active');
        });
      });
    });

    /* 전체 선택 체크박스 (테이블) */
    var selectAll = document.getElementById('select-all');
    if (selectAll) {
      var bulk = document.getElementById('bulk-bar');
      var rowChecks = document.querySelectorAll('.row-check');
      function refresh() {
        var n = 0;
        rowChecks.forEach(function (c) { if (c.checked) n++; });
        if (bulk) {
          bulk.hidden = n === 0;
          var cnt = bulk.querySelector('[data-count-target]');
          if (cnt) cnt.textContent = n;
        }
      }
      selectAll.addEventListener('change', function () {
        rowChecks.forEach(function (c) { c.checked = selectAll.checked; });
        refresh();
      });
      rowChecks.forEach(function (c) { c.addEventListener('change', refresh); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
