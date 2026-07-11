/* docs/9-prism/app.js — 프리셋 9 "Prism" 데모 "빛(Bit)" 공용 스크립트
 * 순수 바닐라. 데모 상호작용(토스트·접기·토글·세그먼트·트레이)만 담당.
 * 스펙 §7 모션: 상태 전환은 CSS transition에 위임, JS는 상태 클래스/속성만 토글한다. */
(function () {
  'use strict';

  /* 토스트 (§6.8) — 우하단, 4초 후 소멸 */
  var toastTimer = null;
  window.bitToast = function (msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    var label = el.querySelector('.toast-msg');
    if (label) label.textContent = msg;
    el.classList.remove('show');
    // reflow로 애니메이션 재시작
    void el.offsetWidth;
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 4000);
  };

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  onReady(function () {
    /* 접기 섹션 (§6.3 아코디언) */
    document.querySelectorAll('.pgroup-head[data-toggle]').forEach(function (head) {
      head.addEventListener('click', function () {
        var group = head.closest('.pgroup');
        if (!group) return;
        var open = group.getAttribute('data-open') !== 'false';
        group.setAttribute('data-open', open ? 'false' : 'true');
        head.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });

    /* 토글 스위치 (§6.9) */
    document.querySelectorAll('.toggle').forEach(function (t) {
      t.addEventListener('click', function () {
        var on = t.getAttribute('aria-checked') === 'true';
        t.setAttribute('aria-checked', on ? 'false' : 'true');
        var msg = t.getAttribute('data-toast');
        if (msg) window.bitToast(on ? msg + ' 끔' : msg + ' 켬');
      });
      t.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); t.click(); }
      });
    });

    /* 세그먼트 컨트롤 (단일 선택) */
    document.querySelectorAll('[data-seg]').forEach(function (seg) {
      seg.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          seg.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        });
      });
    });

    /* 칩 (다중 토글) */
    document.querySelectorAll('[data-chips="single"]').forEach(function (grp) {
      grp.querySelectorAll('.chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          grp.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        });
      });
    });

    /* 라디오 그룹 */
    document.querySelectorAll('[data-radios]').forEach(function (grp) {
      grp.querySelectorAll('.radio').forEach(function (r) {
        r.addEventListener('click', function () {
          grp.querySelectorAll('.radio').forEach(function (x) { x.setAttribute('aria-checked', x === r ? 'true' : 'false'); });
        });
      });
    });

    /* 모바일/태블릿: 우측 속성 패널(트레이) 열고 닫기 */
    var panel = document.getElementById('panel');
    document.querySelectorAll('[data-panel-open]').forEach(function (b) {
      b.addEventListener('click', function () { if (panel) panel.hidden = false; });
    });
    document.querySelectorAll('[data-panel-close]').forEach(function (b) {
      b.addEventListener('click', function () { if (panel) panel.hidden = true; });
    });

    /* 리스트 단일 선택(레이어·에셋) */
    document.querySelectorAll('[data-select-list]').forEach(function (list) {
      list.querySelectorAll('[data-selectable]').forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (item.tagName === 'A' && item.getAttribute('href')) return; // 링크는 이동
          e.preventDefault();
          list.querySelectorAll('[data-selectable]').forEach(function (x) { x.setAttribute('aria-selected', x === item ? 'true' : 'false'); });
        });
      });
    });

    /* 값 스크럽 시늉: 캐럿 클릭으로 숫자 증감 (§6.2, 즉시 반영·애니메이션 없음) */
    document.querySelectorAll('.stepper').forEach(function (st) {
      var input = st.querySelector('input');
      var up = st.querySelector('[data-step="up"]');
      var down = st.querySelector('[data-step="down"]');
      function bump(delta) {
        if (!input) return;
        var n = parseFloat(input.value.replace(/[^\d.-]/g, '')) || 0;
        input.value = String(n + delta);
      }
      if (up) up.addEventListener('click', function () { bump(1); });
      if (down) down.addEventListener('click', function () { bump(-1); });
    });
  });
})();
