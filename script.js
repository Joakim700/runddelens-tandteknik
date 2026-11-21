const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const cookieLink = document.getElementById('cookie-link');
if (cookieLink) {
  cookieLink.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || 'da';
    const dict = (typeof translations !== 'undefined' && translations[lang]) || {};
    alert(dict['footer.cookieAlert'] || 'Vi bruger kun en teknisk nødvendig session-cookie, som ikke indsamler personoplysninger og slettes, når du lukker browseren.');
  });
}