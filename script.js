const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");


const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav_header.classList.add("sticky");
  } else {
    nav_header.classList.remove("sticky");
  }
}


var navbar = document.querySelector(".header"); 
var sticky = navbar.offsetTop;


window.onscroll = function() {
  myFunction();
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Modal functionality
  // const modal = document.getElementById('estimateModal');
  // const closeModalElements = document.querySelectorAll('.modal-close');

  // Function to open the modal
  // window.openModal = function() {
  //     modal.style.display = 'block';
  //     document.body.style.overflow = 'hidden'; // Prevent background scrolling
      // modal.querySelector('textarea').focus(); // Focus on the first input field
  // };

  // Function to close the modal
  // window.closeModal = function() {
  //     modal.style.display = 'none';
  //     document.body.style.overflow = 'visible'; // Allow background scrolling
  // };
// Modal functionality
const modal = document.getElementById('estimateModal');
const closeModalElements = document.querySelectorAll('.modal-close');

// Function to open the modal
window.openModal = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
  modal.querySelector('textarea').focus(); 
};

// Function to close the modal
window.closeModal = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
};
  // Close modal when clicking outside of it
  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  };

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeModal();
      }
  });

  // Close modal elements (if multiple close mechanisms are desired)
  closeModalElements.forEach(element => {
      element.addEventListener('click', closeModal);
  });

  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  const sticky = navbar.offsetTop;

  window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add('sticky');
      } else {
          navbar.classList.remove('sticky');
      }
  };
});




