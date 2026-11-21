const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

/* Marker den aktuelle side i menuen */
const here = location.pathname.split('/').pop() || 'index.html';
nav.querySelectorAll('a:not(.call-btn)').forEach(a => {
  if (a.getAttribute('href') === here) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});

const cookieLink = document.getElementById('cookie-link');
if (cookieLink) {
  cookieLink.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || 'da';
    const dict = (typeof translations !== 'undefined' && translations[lang]) || {};
    alert(dict['footer.cookieAlert'] || 'Vi bruger kun en teknisk nødvendig session-cookie, som ikke indsamler personoplysninger og slettes, når du lukker browseren.');
  });
}