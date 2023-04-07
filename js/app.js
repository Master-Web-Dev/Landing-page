const bars = document.querySelector(".bars");
const navBar = document.querySelector("nav.navBar");

bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    navBar.classList.toggle("active");
});

const loadingPage = document.querySelector(".loadingPage");

window.addEventListener("load", () => {
    loadingPage.classList.add("finishedAnim");
});

loadingPage.addEventListener("animationend", () => {
    loadingPage.style.display = "none";

});