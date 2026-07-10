/* docs/4-obsidian/app.js — 프리셋 4 "Obsidian" 데모 공용 스크립트.
 * 커맨드 팔레트(⌘K)·모달·토스트·배포 로그 확장. 모션 값은 SPEC §7 토큰과 동일. */
(function () {
  'use strict';
  var MOTION_BASE = 150;

  /* ── 스크림(모달/팔레트) 열기·닫기 + 포커스 트랩 ── */
  var lastFocus = null;
  function openScrim(id) {
    var s = document.getElementById(id);
    if (!s) return;
    lastFocus = document.activeElement;
    s.classList.add('open');
    var f = s.querySelector('input, button, [tabindex]');
    if (f) setTimeout(function () { f.focus(); }, 20);
    document.addEventListener('keydown', onKey);
  }
  function closeScrim(id) {
    var s = document.getElementById(id);
    if (!s || !s.classList.contains('open')) return;
    s.classList.remove('open');
    document.removeEventListener('keydown', onKey);
    if (lastFocus) lastFocus.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.scrim.open');
      if (open) closeScrim(open.id);
    }
  }
  window.gwOpen = openScrim;
  window.gwClose = closeScrim;

  /* 스크림 배경 클릭으로 닫기 */
  document.addEventListener('click', function (e) {
    var s = e.target.closest ? e.target.closest('.scrim.open') : null;
    if (s && e.target === s) closeScrim(s.id);
  });

  /* ── 커맨드 팔레트 ⌘K ── */
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (document.getElementById('palette')) {
        var open = document.querySelector('.scrim.open');
        if (open && open.id === 'palette') closeScrim('palette');
        else openScrim('palette');
      }
    }
    /* C = 이슈 만들기 (입력 중이 아닐 때) */
    if ((e.key === 'c' || e.key === 'C') && !/(INPUT|TEXTAREA|SELECT)/.test(document.activeElement.tagName)) {
      if (document.getElementById('new-issue')) { e.preventDefault(); openScrim('new-issue'); }
    }
  });

  /* 팔레트 결과 키보드 이동 */
  window.gwPaletteNav = function (input) {
    var list = input.closest('.palette').querySelectorAll('.palette-row');
    input.addEventListener('keydown', function (e) {
      var active = input.closest('.palette').querySelector('.palette-row.active');
      var idx = Array.prototype.indexOf.call(list, active);
      if (e.key === 'ArrowDown') { e.preventDefault(); if (active) active.classList.remove('active'); list[Math.min(idx + 1, list.length - 1)].classList.add('active'); }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (active) active.classList.remove('active'); list[Math.max(idx - 1, 0)].classList.add('active'); }
      if (e.key === 'Enter') { var a = input.closest('.palette').querySelector('.palette-row.active'); if (a && a.getAttribute('href')) location.href = a.getAttribute('href'); }
    });
  };

  /* ── 토스트 (§6.8) ── */
  window.gwToast = function (title, desc, kind) {
    var wrap = document.querySelector('.toast-wrap');
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
    var t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status');
    var dotClass = kind === 'error' ? 'sd-failed' : (kind === 'success' ? 'sd-done' : 'sd-progress');
    t.innerHTML = '<span class="status-dot ' + dotClass + '"></span>' +
      '<div class="t-main"><div class="t-body" style="font-weight:500"></div>' +
      (desc ? '<div class="t-desc t-caption"></div>' : '') + '</div>' +
      '<button class="icon-btn" aria-label="닫기"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg></button>';
    t.querySelector('.t-main .t-body').textContent = title;
    if (desc) t.querySelector('.t-desc').textContent = desc;
    wrap.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('in'); });
    function dismiss() { t.classList.remove('in'); setTimeout(function () { t.remove(); }, MOTION_BASE); }
    t.querySelector('button').addEventListener('click', dismiss);
    if (kind !== 'error') setTimeout(dismiss, 5000);
  };

  /* ── 배포 로그 행 확장 (§9 screen-4) ── */
  window.gwToggleLog = function (btn) {
    var row = btn.closest('.deploy-item');
    var panel = row.nextElementSibling;
    if (!panel || !panel.classList.contains('deploy-detail')) return;
    var open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  /* ── 클립보드 복사 ── */
  window.gwCopy = function (text, label) {
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
    window.gwToast(label || '복사했습니다.', text, 'success');
  };

  /* ── 세그먼트/탭 토글 ── */
  window.gwSegment = function (btn) {
    var group = btn.parentElement.querySelectorAll('button');
    group.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
    var target = btn.getAttribute('data-target');
    if (target) {
      document.querySelectorAll('[data-seg-panel]').forEach(function (p) {
        p.hidden = p.getAttribute('data-seg-panel') !== target;
      });
    }
  };
})();
