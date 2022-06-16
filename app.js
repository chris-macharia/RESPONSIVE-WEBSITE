const menu = document.querySelector('#mobile_menu');
const menu_links =  document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menu_links.classList.toggle('active');
});