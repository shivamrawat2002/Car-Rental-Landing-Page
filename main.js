// Navigation menu toggle logic
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the menu when any navigation link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal settings for animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header animations
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

// Steps section animations
ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Service section animations
ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// Experience section animations
ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

// Download section animations
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});

// Contact Form handling with validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission for demo purposes

    // Get form values
    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const phone = contactForm.querySelector("#phone").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    let valid = true;

    // Clear previous error messages
    const errorMessages = contactForm.querySelectorAll(".error");
    errorMessages.forEach((msg) => msg.remove());

    // Name validation (required and not empty)
    if (!name) {
      valid = false;
      showError("#name", "Name is required.");
    }

    // Email validation (required and valid format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      valid = false;
      showError("#email", "Please enter a valid email address.");
    }

    // Phone validation (optional but should be a valid number)
    if (phone && !/^\d{10}$/.test(phone)) {
      valid = false;
      showError("#phone", "Please enter a valid phone number.");
    }

    // Message validation (required)
    if (!message) {
      valid = false;
      showError("#message", "Message is required.");
    }

    // If form is valid, simulate form submission
    if (valid) {
      console.log("Form submitted:", { name, email, phone, message });
      alert("Thank you for contacting us. We will get back to you soon.");
      contactForm.reset(); // Clear the form after submission
    }
  });
}

// Function to display error message next to input
function showError(inputSelector, errorMessage) {
  const inputElement = document.querySelector(inputSelector);
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.style.color = "red";
  errorElement.textContent = errorMessage;
  inputElement.parentNode.appendChild(errorElement);
}
