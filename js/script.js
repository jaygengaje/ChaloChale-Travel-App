// ChaloChale Travel App - beginner-friendly JavaScript

// Fill the destination field when a user clicks a Book button on the home page.
document.querySelectorAll("[data-destination]").forEach(function (button) {
  button.addEventListener("click", function () {
    const destinationInput = document.getElementById("destination");
    if (destinationInput) {
      destinationInput.value = button.getAttribute("data-destination");
    }
  });
});

// Read a destination from the URL on the Booking page.
const bookingDestination = document.getElementById("bookingDestination");
if (bookingDestination) {
  const params = new URLSearchParams(window.location.search);
  const destination = params.get("destination");
  if (destination) bookingDestination.value = destination;
}

// Demo booking form in the home page modal.
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("bookingMessage").classList.remove("d-none");
    bookingForm.reset();
  });
}

// Demo booking form on the separate Booking page.
const bookingPageForm = document.getElementById("bookingPageForm");
if (bookingPageForm) {
  bookingPageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("bookingPageMessage").classList.remove("d-none");
    bookingPageForm.reset();
  });
}

// Demo contact form.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("contactSuccess").classList.remove("d-none");
    contactForm.reset();
  });
}


// Signup form demo: checks that both entered passwords match.
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("signupMessage");
    if (document.getElementById("signupPassword").value !== document.getElementById("confirmPassword").value) {
      message.textContent = "Passwords do not match. Please try again.";
      message.classList.remove("d-none", "alert-success");
      message.classList.add("alert-danger");
      return;
    }
    message.textContent = "Signup form submitted successfully (demo only). No account has been created.";
    message.classList.remove("d-none", "alert-danger");
    message.classList.add("alert-success");
    signupForm.reset();
  });
}

// Login form demo: no real password verification without a backend.
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("loginMessage").classList.remove("d-none");
    loginForm.reset();
  });
}
