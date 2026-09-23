function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('locale-en', lang === 'en');
  document.documentElement.classList.toggle('locale-zh', lang === 'zh');
  document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
    button.textContent = lang === 'zh' ? 'EN' : '中';
    button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
  });
  document.querySelectorAll('[data-blog-link]').forEach((link) => {
    link.href = lang === 'zh' ? 'https://suwen-blog.vercel.app/zh' : 'https://suwen-blog.vercel.app/en';
  });
  try { localStorage.setItem('lang', lang); } catch (_) {}
}

function toggleLang() {
  setLang(document.documentElement.lang === 'zh' ? 'en' : 'zh');
}

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (_) {}
  const browser = navigator.language || 'zh';
  setLang(saved || (browser.toLowerCase().startsWith('zh') ? 'zh' : 'en'));
})();
