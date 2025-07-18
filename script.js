// Menu Hamburguer Mobile
const menuBtn = document.getElementById('menuHamburguer');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-aberto', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em um link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      document.body.classList.remove('menu-aberto');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
