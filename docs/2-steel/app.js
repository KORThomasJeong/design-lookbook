/* docs/2-steel/app.js — "관제(Gwanje)" 데모 공용 스크립트
 * 토스트(§6.8)와 포커스 트랩(§9 screen-3). 페이지별 로직은 각 HTML 하단 인라인. */
(function () {
  'use strict';

  var ICONS = {
    success: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="8" cy="8" r="6.5"/><path d="M5.5 8.2l1.8 1.8 3.4-3.8"/></svg>',
    danger: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 2 14.8 13.7H1.2L8 2z"/><path d="M8 6.5v3"/><path d="M8 11.6v.2"/></svg>'
  };
  var X_ICON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>';

  /* 성공 토스트 자동 소멸 5초, 에러(danger)는 수동 닫기만 (§6.8) */
  window.gwToast = function (title, body, kind) {
    kind = kind || 'success';
    var region = document.querySelector('.toast-region');
    if (!region) {
      region = document.createElement('div');
      region.className = 'toast-region';
      document.body.appendChild(region);
    }
    var t = document.createElement('div');
    t.className = 'toast' + (kind === 'danger' ? ' toast-danger' : '');
    t.setAttribute('role', 'status');
    t.innerHTML =
      '<span class="toast-ic" aria-hidden="true">' + ICONS[kind] + '</span>' +
      '<div class="toast-msg"><div class="toast-title t-body">' + title + '</div>' +
      (body ? '<div class="t-caption sub">' + body + '</div>' : '') +
      '</div>' +
      '<button type="button" class="toast-x" aria-label="알림 닫기">' + X_ICON + '</button>';
    var gone = false;
    function out() {
      if (gone) return;
      gone = true;
      t.classList.add('out');
      setTimeout(function () { t.remove(); }, 150);
    }
    t.querySelector('.toast-x').addEventListener('click', out);
    region.appendChild(t);
    if (kind !== 'danger') setTimeout(out, 5000);
    return t;
  };

  /* 포커스 트랩: 드로어·모달 안에서 Tab 순환, ESC 콜백 */
  window.gwTrapFocus = function (container, onEsc) {
    function focusables() {
      var sel = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
      return Array.prototype.filter.call(container.querySelectorAll(sel), function (el) {
        return el.getClientRects().length > 0;
      });
    }
    function handler(e) {
      if (e.key === 'Escape') {
        if (onEsc) onEsc();
        return;
      }
      if (e.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    container.addEventListener('keydown', handler);
    return function () { container.removeEventListener('keydown', handler); };
  };
})();
