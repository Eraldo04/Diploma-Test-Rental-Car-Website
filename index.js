"strict";
const mobileBtn = document.querySelector(".menu-photo");
const mobileMenu = document.querySelector(".menuId");
const navlinks = document.querySelector(".navbar");
const modalBtns = document.querySelectorAll(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const modal = document.getElementById("sendBtn");
const btnScroll = document.querySelector(".scroll-1");
const section1 = document.querySelector("#section-1");
const btnScroll2 = document.querySelectorAll(".scroll-2");
const section2 = document.querySelector("#section-2");
const btnScroll3 = document.querySelector(".scroll-3");
const section3 = document.querySelector("#section-3");
const scrollTop = document.querySelector(".scrollTop");
const chartImg = document.querySelector(".big");
const smallImg = document.querySelector(".small");

mobileMenu.classList.add("view");

// MEDIA LIST MENU BUTTON
mobileBtn.addEventListener("click", function() {
    if (mobileMenu.classList.contains("view")) {
        mobileMenu.classList.remove("view");
    } else {
        mobileMenu.classList.add("view");
    }
});

//Scrolling Smooth

btnScroll.addEventListener("click", function(e) {
    e.preventDefault();
    const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: "smooth" });
});
const orderr = function(e) {
    e.preventDefault();
    const s1coords = section2.getBoundingClientRect();
    section2.scrollIntoView({ behavior: "smooth" });
};
btnScroll2.forEach((btn) => btn.addEventListener("click", orderr));

btnScroll3.addEventListener("click", function(e) {
    e.preventDefault();
    const s1coords = section3.getBoundingClientRect();
    section3.scrollIntoView({ behavior: "smooth" });
});

// SCroll to the top

scrollTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// Contact me Modal form

const openModal = function(e) {
    e.preventDefault();
    modalBg.classList.add("active");
};
modalBtns.forEach((btn) => btn.addEventListener("click", openModal));

modalClose.addEventListener("click", function() {
    modalBg.classList.remove("active");
});

// SHHOP CHART AT ORDER
for (i = 0; i <= 2; i++) {
    smallImg.addEventListener("click", function(e) {
        e.preventDefault();
        chartImg.src = smallImg[i].src;
    });
}