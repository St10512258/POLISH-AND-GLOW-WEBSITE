/* ==========================================================
   Polish & Glow Nail Salon - main.js
   One JavaScript file for the whole site.
   Each section checks that its elements exist, so it only
   runs on the page that needs it.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initHamburgerMenu();   // all pages
    displayDate();         // home page
    displayTime();         // pages with a footer clock
    setInterval(displayTime, 1000);
    initContactForm();     // contact page
    initEnquiryForm();     // enquiry page
});

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* ---------- Hamburger navigation (small screens) ---------- */
function initHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); // animate hamburger
    });
}

/* ---------- Date stamp (home page) ---------- */
function displayDate() {
    const dateBox = document.getElementById("datestamp");
    if (!dateBox) return;

    dateBox.textContent = `Today's Date: ${new Date().toDateString()}`;
}

/* ---------- Live time stamp (footer) ---------- */
function displayTime() {
    const timeBox = document.getElementById("time");
    if (!timeBox) return;

    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    timeBox.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

/* ---------- Contact form validation ---------- */
function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const errorMessage = document.getElementById("errorMessage");

        errorMessage.textContent = "";

        if (name === "" || email === "" || message === "") {
            errorMessage.textContent = "All input fields are required!";
            e.preventDefault();
            return;
        }
        if (!EMAIL_PATTERN.test(email)) {
            errorMessage.textContent = "Incorrect email format!";
            e.preventDefault();
            return;
        }
        alert("Your message was sent successfully!");
    });
}

/* ---------- Enquiry / booking form validation ---------- */
function initEnquiryForm() {
    const form = document.getElementById("enquiryForm");
    const successMsg = document.getElementById("successMessage");
    if (!form || !successMsg) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        successMsg.style.display = "none";

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const message = form.elements["message"].value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!EMAIL_PATTERN.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        successMsg.style.display = "block";
        form.reset();
    });
}
