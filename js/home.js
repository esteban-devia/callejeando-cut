// PRESELECT CURRENT DAY IN AGENDA
var day = new Date();
day = day.getDay();
if (day === 0) {
    day = 7;
}

const agenda = document.querySelectorAll(".single-day");

for (let i = 0; i < agenda.length; i++) {
    if (i === day - 1) {
        agenda[i].classList.add("active")
    }
}

agenda.forEach(day => {
    day.addEventListener("click", function () {
        for (let i = 0; i < agenda.length; i++) {
            agenda[i].classList.remove("active")
        }
        day.classList.add("active")
    })
})

// TOUCH LEFT/RIGHT MOVEMENT IN AGENDA MOBILE VERSION
const body = document.querySelector("body");

const observer = new ResizeObserver(function (entry, observer) {
    const days = document.querySelector(".days")
    if (entry[0].contentRect.width <= 660) {
        var clientX;
        days.addEventListener("touchstart", function (e) {
            clientX = e.touches[0].clientX;
        })
        days.addEventListener('touchend', function (e) {
            var deltaX;
            deltaX = e.changedTouches[0].clientX - clientX;
            if (deltaX < 0) {
                days.style.transform = `translateX(-50%)`
            } else if (deltaX > 0) {
                days.style.transform = `translateX(0)`
            }
        })
    }
});

observer.observe(body)

// DISPLAY EVENT MODAL
const eventList = document.querySelectorAll(".singleEvent");

eventList.forEach(e => {
    e.addEventListener("click", function () {
        const modalEvent = document.querySelector(".modal-events");
        modalEvent.style.display = "block"
    })
})

// EVENTS MODAL SLIDER
let count = 0;
const slider = document.querySelector(".images");

function nextImg() {
    count++;
    if (count == 3) {
        count = 0;
    }
    slide(count)
}

function prevImg() {
    count--;
    if (count == -1) {
        count = 2;
    }
    slide(count)
}

function slide(count) {
    let pos = -100 * count;
    slider.style.transform = `translateX(${pos}%)`;

    const bullets = document.querySelectorAll(".galery-pag span");
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove("active")
    }
    bullets[count].classList.add("active")
}