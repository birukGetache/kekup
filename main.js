const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const projectSections = document.querySelectorAll(".project-section");

  // Function to switch sections
  function switchSection(sectionId) {
    // Hide all sections
    projectSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add("active");
      animateProjectCards(activeSection);
    }

    // Update active nav item
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-section") === sectionId) {
        item.classList.add("active");
      }
    });
  }

  // Function to animate project cards
  function animateProjectCards(section) {
    const projectCards = section.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 300); // Delay each card's animation
    });
  }

  // Add click event listeners to nav items
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sectionId = item.getAttribute("data-section");
      switchSection(sectionId);
    });
  });

  // Initialize with the first section active
  switchSection("website");
});