
const stars = document.getElementById('stars');
const img = document.getElementById('picture');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const header = document.querySelector('header');
const social = document.getElementById('social');
const sec = document.getElementById('sec');


window.addEventListener('scroll', function() {

let value = window.scrollY;
  
// Update element styles based on scroll position
stars.style.left = value * 0.25 + 'px';
text.style.marginBottom = value * 1.5 + 'px';
social.style.marginBottom= value * 1 + 'px';
img.style.marginBottom = value * 4 + 'px';
btn.style.marginBottom = value * 1 + 'px';
header.style.top = value * 0.5 + 'px';
});

//avoid going back to top on clicking read more button and read more functionality
document.getElementById("read-more-link").addEventListener("click", function(event) {
    event.preventDefault();
    var checkbox = document.getElementById("post-1");
    checkbox.checked = !checkbox.checked;
    this.textContent = checkbox.checked ? "Read Less" : "Read More";
});

//progressbar animations
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress');
    const skillsSection = document.querySelector('.skills');

    function setProgressWidths() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.setProperty('--progress-width', width);
            bar.style.width = '0';
        });
    }

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.getPropertyValue('--progress-width');
            bar.style.width = width;
        });
    }

    setProgressWidths();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(skillsSection);
            }
        });
    }, {
        threshold: 0.1 
    });

    observer.observe(skillsSection);
});

//animation effects on education section
document.addEventListener("DOMContentLoaded", function() {
    const timelineBlocks = document.querySelectorAll('.timeline-block');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    timelineBlocks.forEach(block => {
        observer.observe(block);
    });
});

//contact me form validation

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact-form');
    const nameInput = contactForm.querySelector('input[name="Name"]');
    const emailInput = contactForm.querySelector('input[name="Email Adress"]');
    const messageInput = contactForm.querySelector('textarea[name="Message"]');
    const submitButton = document.getElementById('contact-btn');

    // Function to create and display error messages
    function showError(inputElement, message) {
        const existingError = inputElement.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }

        // Create a new error message element
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '0.875rem';
        errorMessage.style.marginLeft = '10px';

        inputElement.parentElement.insertBefore(errorMessage, inputElement.nextSibling);
    }

    // Function to clear error messages
    function clearError(inputElement) {
        const existingError = inputElement.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }
    }

    function showSuccessMessage(message) {
        const existingSuccessMessage = document.querySelector('.success-message');
        if (existingSuccessMessage) {
            existingSuccessMessage.remove();
        }

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = message;

        submitButton.parentElement.appendChild(successMessage);
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Validate Name
        clearError(nameInput);
        if (nameInput.value.trim() === "") {
            isValid = false;
            showError(nameInput, "Please enter your name.");
        }

        // Validate Email
        clearError(emailInput);
        if (emailInput.value.trim() === "") {
            isValid = false;
            showError(emailInput, "Please enter your email address.");
        }

        clearError(messageInput);
        if (messageInput.value.trim() === "") {
            isValid = false;
            showError(messageInput, "Please enter your message.");
        }

        // If form is valid, show success message
        if (isValid) {
            showSuccessMessage("Form submitted successfully!");
        }
    });
});


