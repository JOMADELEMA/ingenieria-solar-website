var menu = document.querySelector("#menu");
var sidebar = document.querySelector("#sidebar");
var sidebarCloseButton = document.querySelector("#sidebar__close__button");

const toggleSidebar = () => {
  sidebar.classList.toggle("hidden");
};

menu.addEventListener("click", toggleSidebar);
sidebarCloseButton.addEventListener("click", toggleSidebar);
