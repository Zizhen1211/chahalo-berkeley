// Header and mobile menu

var header = document.querySelector("[data-header]");
var nav = document.querySelector(".site-nav");
var toggle = document.querySelector(".nav-toggle");

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

updateHeader();

window.addEventListener("scroll", updateHeader);

function closeMenu() {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", function () {
  if (nav.classList.contains("open")) {
    closeMenu();
  } else {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }
});

// Close the menu after choosing a link

var links = nav.querySelectorAll("a");

for (var a = 0; a < links.length; a++) {
  links[a].addEventListener("click", closeMenu);
}

// Close the menu with the Escape key

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Drink category filters

var filters = document.querySelectorAll(".filter");
var drinks = document.querySelectorAll(".drink-column");

for (var i = 0; i < filters.length; i++) {
  if (i === 0) {
    filters[i].setAttribute("aria-pressed", "true");
  } else {
    filters[i].setAttribute("aria-pressed", "false");
  }

  filters[i].addEventListener("click", function () {
    for (var j = 0; j < filters.length; j++) {
      filters[j].classList.remove("active");
      filters[j].setAttribute("aria-pressed", "false");
    }

    this.classList.add("active");
    this.setAttribute("aria-pressed", "true");

    var category = this.getAttribute("data-filter");

    for (var k = 0; k < drinks.length; k++) {
      var categories = drinks[k]
        .getAttribute("data-category")
        .split(" ");

      if (category === "all" || categories.indexOf(category) !== -1) {
        drinks[k].hidden = false;
      } else {
        drinks[k].hidden = true;
      }
    }
  });
}

// Footer year

var year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}