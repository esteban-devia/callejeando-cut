// TOGGLE FILTERS
const filterName = document.querySelectorAll(".option-name");
const filterOpt = document.querySelectorAll(".filter-option");

filterName.forEach(name => {
    name.addEventListener("click", function () {
        name.parentElement.classList.toggle("show")
    })
})

// OPEN MODAL
const siteList = document.querySelectorAll(".single-site");

siteList.forEach(e => {
    e.addEventListener("click", function () {
        const modalEvent = document.querySelector(".modal-events");
        modalEvent.style.display = "block"
    })
})

// CHANGE MODAL MAIN IMAGE

const thumb = document.querySelectorAll(".thumb-image");
const main = document.querySelector(".main-image");

thumb.forEach(img => {
    img.addEventListener("click", function () {
        let selected = img.getAttribute("src");
        main.src = selected
    })
})
