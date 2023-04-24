const menuImg = document.querySelector(".menuImg");
const menuList = document.querySelector('.menuList');


menuImg.onclick = () => {
    menuImg.classList.toggle("menuImg-active");
    isMenuActive();
    isMenuListActive();
}

function isMenuActive() {
    menuImg.classList.contains("menuImg-active")
        ? menuImg.src = "./assets/images/icon-menu-close.svg"
        : menuImg.src = "./assets/images/icon-menu.svg"
}

function isMenuListActive() {
    menuImg.classList.contains("menuImg-active")
        ? menuList.classList.add("menuList-active")
        : menuList.classList.remove("menuList-active")
}
