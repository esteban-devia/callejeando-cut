// TRANSITION ANIMATION IN NAV BAR
const heroTitle = document.querySelector(".title");
const menuNav = document.querySelector("nav");
const menu = document.querySelector(".menu");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
};

if (screen.width > 580) {
    const menuObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                menuNav.classList.add("shrink");
                menu.classList.add("show")
            } else {
                menuNav.classList.remove("shrink")
                menu.classList.remove("show")
            }
        });
    }, options);

    menuObserver.observe(heroTitle);

    menu.addEventListener("click", function () {
        menuNav.classList.remove("shrink")
        menu.classList.remove("show")
    })
} else {
    menu.addEventListener("click", function () {
        menuNav.classList.toggle("show")
    })
}

// CLOSE MODAL
const closeModal = document.querySelectorAll(".close");

closeModal.forEach(modal => {
    modal.addEventListener("click", function () {
        modal.parentElement.style.display = "none"
    })
})

// FORM VALIDATION
document.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
        validateContactForm();
    };
})(), true);

function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const nameformat = /^([a-zA-Z ]+)$/;
    const mailformat = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9]+)\.([a-z]+)(\.[a-z]+)?$/;

    let count = 0;

    const error = document.querySelectorAll(".errorForm")

    if (!name) {
        error[0].textContent = "Este campo es obligatorio"
    } else if (nameformat.test(name) == false) {
        error[0].textContent = "No uses caracteres especiales"
    } else {
        error[0].textContent = ""
        count++;
    }

    if (!email) {
        error[1].textContent = "Este campo es obligatorio"
    }
    else if (mailformat.test(email) == false) {
        error[1].textContent = "Email invalido"
    } else {
        error[1].textContent = ""
        count++;
    }

    if (count == 2) {
        const modal = document.querySelector(".modalForm");
        modal.style.display = "block";
        setTimeout(() => {
            location.reload()
        }, 3000);
    } else {
        return
    }
}