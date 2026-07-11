/* docs/15-amber/app.js — Amber 데모 "톡톡(TokTok)" 공용 스크립트
 * 앱바 스크롤 그림자(§6.5)·토스트(§6.8)·바텀시트(§6.7)·채팅 입력/전송(§6.11).
 * 모션 시간은 SPEC §7 토큰과 일치한다. */
(function () {
  'use strict';

  /* 앱바 스크롤 시 그림자 (§6.5) */
  function bindAppbar() {
    var scroller = document.querySelector('.scroll');
    var appbar = document.querySelector('.appbar');
    if (!scroller || !appbar) return;
    scroller.addEventListener('scroll', function () {
      appbar.classList.toggle('scrolled', scroller.scrollTop > 8);
    }, { passive: true });
  }

  /* 토스트 (§6.8) — 동시 1개, 2.5초 유지, 성공 체크 아이콘 */
  window.tkToast = function (message) {
    var host = document.querySelector('.app') || document.body;
    var old = host.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg><span></span>';
    t.querySelector('span').textContent = message;
    host.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.style.transition = 'opacity var(--motion-fast) linear';
      t.style.opacity = '0';
      setTimeout(function () { t.remove(); }, 200);
    }, 2500);
  };

  /* 바텀시트 (§6.7) — 진입 240ms ease-out-soft, 딤 페이드 180ms */
  window.tkSheet = {
    open: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      if (!sheet) return;
      sheet.setAttribute('data-open', 'true');
      if (dim) dim.classList.add('open');
      var f = sheet.querySelector('button, a, [tabindex]');
      if (f) f.focus();
    },
    close: function (id) {
      var sheet = document.getElementById(id);
      var dim = document.getElementById(id + '-dim');
      if (!sheet) return;
      sheet.removeAttribute('data-open');
      if (dim) dim.classList.remove('open');
    }
  };
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.sheet[data-open="true"]');
    if (open) window.tkSheet.close(open.id);
  });

  /* 채팅 입력·전송 (§6.11) — 입력이 있을 때만 전송 버튼 활성,
   * 보내면 내 말풍선이 아래에서 톡 올라온다(msg-send 320ms 스프링) */
  function bindComposer() {
    var form = document.querySelector('[data-composer]');
    if (!form) return;
    var input = form.querySelector('input');
    var send = form.querySelector('.send-btn');
    var list = document.querySelector('[data-thread-list]');
    var scroller = document.querySelector('.scroll');
    function sync() { send.disabled = input.value.trim().length === 0; }
    input.addEventListener('input', sync);
    sync();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text || !list) return;
      var now = new Date();
      var hh = now.getHours(), ampm = hh < 12 ? '오전' : '오후';
      var h12 = hh % 12; if (h12 === 0) h12 = 12;
      var time = ampm + ' ' + h12 + ':' + String(now.getMinutes()).padStart(2, '0');

      var wrap = document.createElement('div');
      wrap.className = 'msg mine gap-group msg-in-mine';
      var col = document.createElement('div');
      col.className = 'bubble-col';
      var b = document.createElement('div');
      b.className = 'bubble bubble-mine';
      b.textContent = text;
      var meta = document.createElement('div');
      meta.className = 'msg-meta';
      var tspan = document.createElement('span');
      tspan.textContent = time;
      var unread = document.createElement('span');
      unread.className = 'msg-unread';
      unread.textContent = '1';
      meta.appendChild(tspan); meta.appendChild(unread);
      col.appendChild(b); col.appendChild(meta);
      wrap.appendChild(col);
      list.appendChild(wrap);

      input.value = '';
      sync();
      input.focus();
      if (scroller) scroller.scrollTop = scroller.scrollHeight;

      /* 상대가 잠시 후 읽음 → 안읽음 '1' 사라짐 */
      setTimeout(function () { unread.remove(); }, 1400);
    });
  }

  function init() { bindAppbar(); bindComposer(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
