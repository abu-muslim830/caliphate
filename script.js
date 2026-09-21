// ============================
// MOBILE MENU
// ============================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}


// ============================
// CLOSE MOBILE MENU
// ============================

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navbar")
            .classList.remove("active");

    });

});


// ============================
// CURRENT YEAR
// ============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


// ============================
// GALLERY IMAGE CLICK
// ============================

const galleryImages =
    document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});