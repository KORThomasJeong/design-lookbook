/* docs/10-slate/app.js — "깃터(Gitter)" 데모 공용 동작
 * SPEC §7 모션 규칙(색·배경·opacity·미세 이동만)에 맞춘 최소 상호작용. */
(function () {
  "use strict";

  // ── 토스트 (§6.8) ─────────────────────────────────────────────
  var toastTimer = null;
  window.gToast = function (msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.querySelector(".toast-msg").textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.style.transition = "opacity var(--motion-fast) var(--ease-standard)";
      el.style.opacity = "0";
      setTimeout(function () { el.classList.remove("show"); el.style.opacity = ""; el.style.transition = ""; }, 200);
    }, 4000);
  };

  // ── 다이얼로그 (§6.7) ─────────────────────────────────────────
  window.gOpenDialog = function (id) {
    var dim = document.getElementById("dim");
    var dlg = document.getElementById(id);
    if (dim) dim.classList.add("open");
    if (dlg) { dlg.classList.add("open"); var f = dlg.querySelector("input,button"); if (f) f.focus(); }
  };
  window.gCloseDialog = function () {
    var dim = document.getElementById("dim");
    if (dim) dim.classList.remove("open");
    document.querySelectorAll(".dialog.open").forEach(function (d) { d.classList.remove("open"); });
  };

  // ── 토글 스위치 (§6) ──────────────────────────────────────────
  function bindSwitch(sw) {
    function toggle() {
      var on = sw.getAttribute("aria-checked") === "true";
      sw.setAttribute("aria-checked", on ? "false" : "true");
      var label = sw.getAttribute("data-label") || "설정";
      window.gToast(label + (on ? " 사용 안 함" : " 사용 중"));
    }
    sw.addEventListener("click", toggle);
    sw.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
    });
  }

  // ── 접기/펼치기 (diff 파일, screen-4) ────────────────────────
  window.gToggleCollapse = function (btn) {
    var target = document.getElementById(btn.getAttribute("aria-controls"));
    if (!target) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
    target.hidden = open;
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".switch").forEach(bindSwitch);

    // dim 클릭 시 닫기
    var dim = document.getElementById("dim");
    if (dim) dim.addEventListener("click", window.gCloseDialog);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") window.gCloseDialog(); });

    // 새 코멘트 등록 (screen-3) — 페이드인 카드 추가 (§7 리스트 갱신)
    var form = document.getElementById("comment-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ta = form.querySelector("textarea");
        var text = (ta.value || "").trim();
        if (!text) { ta.focus(); return; }
        var tl = document.getElementById("timeline");
        var item = document.createElement("div");
        item.className = "tl-item row-enter";
        item.innerHTML =
          '<span class="tl-node avatar avatar-24 av-1" aria-hidden="true">나</span>' +
          '<div class="comment-card"><div class="comment-head">' +
          '<span class="author">강민준</span><span>방금</span></div>' +
          '<div class="comment-body"><p></p></div></div>';
        item.querySelector(".comment-body p").textContent = text;
        tl.appendChild(item);
        ta.value = "";
        window.gToast("코멘트를 등록했습니다");
      });
    }

    // 저장소 삭제 확인 (screen-5) — 저장소명 재입력 요구
    var delForm = document.getElementById("delete-form");
    if (delForm) {
      var confirmInput = delForm.querySelector("input");
      var confirmBtn = delForm.querySelector('button[type="submit"]');
      confirmInput.addEventListener("input", function () {
        confirmBtn.disabled = confirmInput.value.trim() !== "octo/starship";
      });
      delForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.gCloseDialog();
        window.gToast("이 데모에서는 삭제가 실행되지 않습니다");
      });
    }
  });
})();
