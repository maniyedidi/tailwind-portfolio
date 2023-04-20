function openMenu() {
  const e = document.getElementById('menu-btn');
  e.classList.toggle('open');

  const menu = document.getElementById('menu');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
