/* design-lookbook preset-loader
 * 데모 화면 공용 토글 바: 색 변형(a/b/...)과 라이트/다크 전환.
 * 사용법: <html data-preset="3" data-variants="a,b" data-theme="light"> 에서
 *   <script src="../assets/preset-loader.js" defer></script>
 * 상태는 preset별 localStorage에 저장된다. 스펙 토큰과 충돌하지 않도록 스타일은 자체 고정값만 쓴다.
 */
(function () {
  var html = document.documentElement;
  var preset = html.getAttribute('data-preset') || '';
  var variants = (html.getAttribute('data-variants') || 'a')
    .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var storeKey = 'lookbook-' + preset;

  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(storeKey) || '{}'); } catch (e) {}
  if (saved.variant && variants.indexOf(saved.variant) !== -1) {
    html.setAttribute('data-variant', saved.variant);
  }
  if (!html.getAttribute('data-variant')) html.setAttribute('data-variant', variants[0]);
  if (saved.theme === 'light' || saved.theme === 'dark') {
    html.setAttribute('data-theme', saved.theme);
  }
  if (!html.getAttribute('data-theme')) html.setAttribute('data-theme', 'light');

  function save() {
    try {
      localStorage.setItem(storeKey, JSON.stringify({
        variant: html.getAttribute('data-variant'),
        theme: html.getAttribute('data-theme')
      }));
    } catch (e) {}
  }

  function init() {
    var style = document.createElement('style');
    style.textContent =
      '.lb-bar{position:fixed;bottom:12px;right:12px;z-index:99999;display:flex;gap:4px;' +
      'padding:6px;border-radius:999px;background:rgba(20,20,24,.82);backdrop-filter:blur(8px);' +
      'font:600 12px/1 system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.25)}' +
      '.lb-bar button,.lb-bar a{appearance:none;border:0;cursor:pointer;border-radius:999px;' +
      'padding:7px 11px;background:transparent;color:#cfcfd6;text-decoration:none;font:inherit;min-height:28px}' +
      '.lb-bar button.lb-on{background:#fff;color:#111}' +
      '.lb-bar button:focus-visible,.lb-bar a:focus-visible{outline:2px solid #7ab8ff;outline-offset:1px}' +
      '@media print{.lb-bar{display:none}}';
    document.head.appendChild(style);

    var bar = document.createElement('nav');
    bar.className = 'lb-bar';
    bar.setAttribute('aria-label', '프리셋 미리보기 설정');

    var varBtns = [];
    variants.forEach(function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = v.toUpperCase();
      b.setAttribute('aria-label', '색 변형 ' + v);
      b.addEventListener('click', function () {
        html.setAttribute('data-variant', v);
        varBtns.forEach(function (x) { x.classList.toggle('lb-on', x === b); });
        save();
      });
      if (v === html.getAttribute('data-variant')) b.classList.add('lb-on');
      varBtns.push(b);
      bar.appendChild(b);
    });

    var themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    function paintTheme() {
      themeBtn.textContent = html.getAttribute('data-theme') === 'dark' ? '☾' : '☀';
      themeBtn.setAttribute('aria-label', '라이트/다크 전환 (현재 ' + html.getAttribute('data-theme') + ')');
    }
    themeBtn.addEventListener('click', function () {
      html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      paintTheme();
      save();
    });
    paintTheme();
    bar.appendChild(themeBtn);

    var home = document.createElement('a');
    home.href = '../index.html';
    home.textContent = '⌂';
    home.setAttribute('aria-label', '갤러리 홈');
    bar.appendChild(home);

    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
