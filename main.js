// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    document.querySelectorAll('.coming-soon').forEach(anchor => {
        var soon = document.createElement('p')
        soon.innerText = "Coming Soon"
        soon.className = "coming-soon-text"

        console.log(soon)
        anchor.appendChild(soon)
    });

     // JavaScript to toggle FAQ answers on click
     document.querySelectorAll('.faq-header').forEach(item => {
        item.addEventListener('click', event => {
            const answer = item.querySelector('.faq-answer');
            const expanded = item.getAttribute('aria-expanded') === 'true';

            item.setAttribute('aria-expanded', !expanded);
            answer.style.display = expanded ? 'none' : 'block'; // Toggle display
        });
    });

    openModal();

});






// Function to close the modal and restore focus to the opener
function closeModal() {
    document.getElementById('estimateModal').classList.remove('modal-show');
    // Restore focus to the element that opened the modal
}

// Script to handle keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
    // Handle focus trapping inside modal
});

// Opening the modal
function openModal() {
    const modal = document.getElementById('estimateModal');
    modal.classList.add('modal-show');
    modal.classList.remove('modal-hide');
    modal.querySelector('textarea').focus(); // Focus on the first form field
}
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Adjust based on your needs
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav');
    }
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) { // Adjust this value based on your needs
        navbar.classList.add('active-nav');
    } else {
        navbar.classList.remove('active-nav');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Show the specified slide
        slides[index].style.display = 'block';
    }

    document.querySelector('.next').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
        showSlide(currentSlide);
    });

    // Initially display the first slide
    showSlide(currentSlide);
});

