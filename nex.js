// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
  hamburger.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.head3, .Six1, .Twe1');
  
  window.addEventListener('scroll', function() {
    sections.forEach(section => {
      const sectionPos = section.getBoundingClientRect().top;
      if (sectionPos < window.innerHeight - 150) {
        section.classList.add('active');
      }
    });
  });
});

// JavaScript for form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Input validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
      formMessage.textContent = 'All fields are required!';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      formMessage.style.color = 'green';

      // Reset form
      contactForm.reset();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const members = document.querySelectorAll('.member');
  const managementApproach = document.querySelector('.management-approach');

  // Slide-in animation for team members
  window.addEventListener('scroll', () => {
    members.forEach((member, index) => {
      const memberPos = member.getBoundingClientRect().top;
      if (memberPos < window.innerHeight / 1.2) {
        setTimeout(() => {
          member.classList.add('slide-in');
        }, index * 100); // delay between each member
      }
    });
  });
});