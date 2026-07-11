/* docs/5-clay/app.js — Clay 데모 "메모리(Memori)" 공용 스크립트
 * 리플(§7 press)·앱바 스크롤 톤 전환(§6.6)·스낵바(§6.9)·다이얼로그(§6.8)·
 * 스위치/칩 토글(§6.11·§6.10). 모션 시간은 SPEC §7 토큰과 일치. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 리플 (§7): 클릭 지점에서 on-color 원이 400ms ease-legacy로 퍼진 뒤 페이드.
     reduced-motion에서는 CSS가 .ripple을 숨기고 ::after 오버레이만 남긴다. */
  function bindRipple() {
    document.addEventListener('pointerdown', function (e) {
      var host = e.target.closest('.state');
      if (!host || reduce) return;
      var rect = host.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 2;
      var span = document.createElement('span');
      span.className = 'ripple';
      span.style.width = span.style.height = size + 'px';
      span.style.left = (e.clientX - rect.left - size / 2) + 'px';
      span.style.top = (e.clientY - rect.top - size / 2) + 'px';
      host.appendChild(span);
      span.addEventListener('animationend', function () { span.remove(); });
    }, { passive: true });
  }

  /* Large/Small 앱바 스크롤 시 surface 톤으로 전환 + 축소 타이틀 페이드 (§6.6) */
  function bindAppbar() {
    var scroller = document.querySelector('.scroll');
    var appbar = document.querySelector('.appbar');
    if (!scroller || !appbar) return;
    scroller.addEventListener('scroll', function () {
      appbar.classList.toggle('scrolled', scroller.scrollTop > 8);
    }, { passive: true });
  }

  /* 스낵바 (§6.9) — 동시 1개, 4초 유지, 선택적 실행취소 액션 */
  window.mSnack = function (message, actionLabel) {
    var host = document.querySelector('.app') || document.body;
    var old = host.querySelector('.snackbar');
    if (old) old.remove();
    var bar = document.createElement('div');
    bar.className = 'snackbar';
    bar.setAttribute('role', 'status');
    var span = document.createElement('span');
    span.textContent = message;
    bar.appendChild(span);
    if (actionLabel) {
      var act = document.createElement('button');
      act.type = 'button';
      act.className = 'snack-action state';
      act.textContent = actionLabel;
      act.style.setProperty('--state-color', 'var(--color-primary)');
      act.addEventListener('click', function () { dismiss(); });
      bar.appendChild(act);
    }
    host.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('show'); });
    var timer = setTimeout(dismiss, 4000);
    function dismiss() {
      clearTimeout(timer);
      bar.classList.remove('show');
      setTimeout(function () { bar.remove(); }, 200);
    }
  };

  /* 다이얼로그 (§6.8) — scale(0.9→1) + scrim fade */
  window.mDialog = {
    open: function (id) {
      var d = document.getElementById(id);
      var s = document.getElementById(id + '-scrim');
      if (!d) return;
      d.classList.add('open');
      if (s) s.classList.add('open');
      var f = d.querySelector('button, a, [tabindex]');
      if (f) f.focus();
    },
    close: function (id) {
      var d = document.getElementById(id);
      var s = document.getElementById(id + '-scrim');
      if (d) d.classList.remove('open');
      if (s) s.classList.remove('open');
    }
  };
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.dialog.open');
    if (open) window.mDialog.close(open.id);
  });

  /* 스위치·필터 칩 토글 (§6.11·§6.10) — aria 상태만 바꾸면 CSS가 전환 */
  function bindToggles() {
    document.querySelectorAll('.switch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        var on = sw.getAttribute('aria-checked') === 'true';
        sw.setAttribute('aria-checked', on ? 'false' : 'true');
      });
    });
    document.querySelectorAll('.chip[data-toggle]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var on = chip.getAttribute('aria-pressed') === 'true';
        chip.setAttribute('aria-pressed', on ? 'false' : 'true');
      });
    });
  }

  function init() { bindRipple(); bindAppbar(); bindToggles(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
