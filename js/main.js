let headerPartBox = document.querySelector(".header-part__links-box")
let openNavBtn = document.querySelector(".header-part__nav-btn")

openNavBtn.addEventListener("click", ()=> {
    headerPartBox.classList.toggle("header-part__links-box-on")
})