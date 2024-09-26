const sideMenu = document.getElementsByClassName("side-menu");
const menuBtn = document.getElementsByClassName("menu-button");
const closeBtn = document.getElementsByClassName("close-button");

function adjustMenuBasedOnSize() {
    const windowSize = window.outerWidth;

    if (windowSize < 1200) {
        menuBtn[0].classList.remove("visually-hidden");
        closeBtn[0].classList.add("visually-hidden");
        sideMenu[0].classList.remove("active");  
    } else {
        menuBtn[0].classList.add("visually-hidden");
        closeBtn[0].classList.add("visually-hidden");
        sideMenu[0].classList.add("active");  
    }
}

// Изначальная настройка меню на основе текущего размера экрана
adjustMenuBasedOnSize();

// Отслеживаем изменения размера экрана
window.addEventListener("resize", adjustMenuBasedOnSize);

// Обработчики для кнопок открытия/закрытия меню
menuBtn[0].addEventListener("click", () => {
    sideMenu[0].classList.add('active');
    menuBtn[0].classList.add("visually-hidden");
    closeBtn[0].classList.remove("visually-hidden");
});

closeBtn[0].addEventListener("click", () => {
    sideMenu[0].classList.remove('active');
    menuBtn[0].classList.remove("visually-hidden");
    closeBtn[0].classList.add("visually-hidden");
});
