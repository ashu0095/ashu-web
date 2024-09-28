// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Toggle "Learn More" section
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', () => {
        moreInfo.classList.toggle('hidden');
        learnMoreBtn.textContent = moreInfo.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Simple form validation (you can expand this)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formResponse.textContent = 'Please fill in all fields.';
            formResponse.style.color = 'red';
            formResponse.classList.remove('hidden');
            return;
        }

        // Simulate form submission success
        formResponse.textContent = 'Thank you for your message!';
        formResponse.style.color = 'green';
        formResponse.classList.remove('hidden');

        // Reset the form
        contactForm.reset();
    });
});
