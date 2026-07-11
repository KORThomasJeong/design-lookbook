/* ============================================================
 * 7 · Quartz — 데모 공용 스크립트 (app.js)
 * 네비 드로어 · 토스트 · 모달/드로어 · 탭 · 세그먼티드 · 선택 상태.
 * 프레임워크 없음. 방어적으로 존재하는 요소에만 바인딩한다.
 * ============================================================ */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- 모바일 사이드 내비 드로어 ---------- */
  function bindNav() {
    var burger = $('[data-nav-toggle]');
    var scrim = $('.scrim');
    function close() { document.body.classList.remove('nav-open'); if (burger) burger.setAttribute('aria-expanded', 'false'); }
    function toggle() {
      var open = document.body.classList.toggle('nav-open');
      if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    if (burger) burger.addEventListener('click', toggle);
    if (scrim) scrim.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------- 헤더 스크롤 그림자 ---------- */
  function bindAppbarShadow() {
    var bar = $('.appbar');
    if (!bar) return;
    var onScroll = function () { bar.classList.toggle('is-stuck', window.scrollY > 4); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 토스트 (§6.10) ---------- */
  var toastWrap;
  function toast(msg, tone) {
    if (!toastWrap) {
      toastWrap = document.createElement('div');
      toastWrap.className = 'toast-wrap';
      toastWrap.setAttribute('role', 'status');
      toastWrap.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastWrap);
    }
    tone = tone || 'success';
    var icons = {
      success: '<path d="M4 8.5 7 11.5 12 5"/>',
      danger: '<path d="M8 4v5"/><path d="M8 11.5h.01"/><circle cx="8" cy="8" r="6.5"/>',
      info: '<circle cx="8" cy="8" r="6.5"/><path d="M8 7.5v4"/><path d="M8 5h.01"/>'
    };
    var el = document.createElement('div');
    el.className = 'toast toast-' + tone;
    el.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (icons[tone] || icons.success) + '</svg><span class="t-body">' + msg + '</span>';
    toastWrap.appendChild(el);
    setTimeout(function () {
      el.classList.add('is-leaving');
      el.addEventListener('animationend', function () { el.remove(); });
    }, 2600);
  }
  window.quartzToast = toast;

  /* ---------- 오버레이(모달) 열기/닫기 ---------- */
  function openOverlay(id) { var o = document.getElementById(id); if (o) o.classList.add('is-open'); }
  function closeOverlay(el) { var o = el.closest ? el.closest('.overlay') : el; if (o) o.classList.remove('is-open'); }
  window.quartzOpen = openOverlay;

  function bindOverlays() {
    $$('[data-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { openOverlay(btn.getAttribute('data-open')); });
    });
    $$('[data-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { closeOverlay(btn); });
    });
    $$('.overlay').forEach(function (o) {
      o.addEventListener('click', function (e) { if (e.target === o) o.classList.remove('is-open'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') $$('.overlay.is-open').forEach(function (o) { o.classList.remove('is-open'); });
    });
  }

  /* ---------- 우측 드로어 ---------- */
  function bindDrawers() {
    $$('[data-drawer-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var d = document.getElementById(btn.getAttribute('data-drawer-open'));
        if (d) { d.classList.add('is-open'); var sc = $('[data-drawer-scrim]'); if (sc) sc.classList.add('is-open'); }
      });
    });
    function closeDrawers() {
      $$('.drawer-panel.is-open').forEach(function (d) { d.classList.remove('is-open'); });
      var sc = $('[data-drawer-scrim]'); if (sc) sc.classList.remove('is-open');
    }
    $$('[data-drawer-close]').forEach(function (btn) {
      btn.addEventListener('click', closeDrawers);
    });
    var scrim = $('[data-drawer-scrim]');
    if (scrim) scrim.addEventListener('click', closeDrawers);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawers(); });
  }

  /* ---------- 세그먼티드 ---------- */
  function bindSegmented() {
    $$('.segmented').forEach(function (seg) {
      seg.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        $$('button', seg).forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      });
    });
  }

  /* ---------- 탭 + 인디케이터 슬라이드 (§6.11) ---------- */
  function bindTabs() {
    $$('[data-tabs]').forEach(function (tabs) {
      var ink = $('.tab-ink', tabs);
      var btns = $$('.tab-btn', tabs);
      var group = tabs.getAttribute('data-tabs');
      function moveInk(btn) {
        if (!ink) return;
        ink.style.width = btn.offsetWidth + 'px';
        ink.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
      }
      function activate(btn) {
        btns.forEach(function (x) { x.classList.toggle('is-on', x === btn); x.setAttribute('aria-selected', x === btn ? 'true' : 'false'); });
        moveInk(btn);
        var target = btn.getAttribute('data-panel');
        $$('[data-tab-panel="' + group + '"]').forEach(function (p) {
          var show = p.getAttribute('data-panel-id') === target;
          p.hidden = !show;
          if (show) { p.classList.remove('tab-panel'); void p.offsetWidth; p.classList.add('tab-panel'); }
        });
      }
      btns.forEach(function (b) { b.addEventListener('click', function () { activate(b); }); });
      var init = btns.filter(function (b) { return b.classList.contains('is-on'); })[0] || btns[0];
      if (init) { requestAnimationFrame(function () { moveInk(init); }); }
      window.addEventListener('resize', function () {
        var on = btns.filter(function (b) { return b.classList.contains('is-on'); })[0];
        if (on) moveInk(on);
      });
    });
  }

  /* ---------- 선택형 카드(라디오/체크박스) ---------- */
  function bindChoices() {
    $$('.choice input').forEach(function (input) {
      var sync = function () {
        if (input.type === 'radio') {
          $$('input[name="' + input.name + '"]').forEach(function (r) {
            var c = r.closest('.choice'); if (c) c.classList.toggle('is-checked', r.checked);
          });
        } else {
          var c = input.closest('.choice'); if (c) c.classList.toggle('is-checked', input.checked);
        }
      };
      input.addEventListener('change', sync);
      sync();
    });
  }

  /* ---------- 테이블 행 선택 + 벌크바 ---------- */
  function bindTableSelect() {
    $$('[data-table-select]').forEach(function (tbl) {
      var all = $('[data-check-all]', tbl);
      var rows = $$('[data-row-check]', tbl);
      var bar = document.getElementById(tbl.getAttribute('data-bulkbar'));
      var count = bar ? $('[data-bulk-count]', bar) : null;
      function refresh() {
        var checked = rows.filter(function (r) { return r.checked; });
        rows.forEach(function (r) { var tr = r.closest('tr'); if (tr) tr.classList.toggle('is-selected', r.checked); });
        if (bar) bar.classList.toggle('is-on', checked.length > 0);
        if (count) count.textContent = checked.length;
        if (all) { all.checked = checked.length === rows.length && rows.length > 0; all.indeterminate = checked.length > 0 && checked.length < rows.length; }
      }
      if (all) all.addEventListener('change', function () { rows.forEach(function (r) { r.checked = all.checked; }); refresh(); });
      rows.forEach(function (r) { r.addEventListener('change', refresh); });
      refresh();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindNav();
    bindAppbarShadow();
    bindOverlays();
    bindDrawers();
    bindSegmented();
    bindTabs();
    bindChoices();
    bindTableSelect();
  });
})();
