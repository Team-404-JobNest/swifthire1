document.addEventListener('DOMContentLoaded', () => {
    /* --- MOBILE MENU LOGIC (Existing) --- */
    const menuToggle = document.getElementById('mobile-menu');
    const navDrawer = document.getElementById('nav-drawer');

    if (menuToggle && navDrawer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navDrawer.classList.toggle('active');
            document.body.style.overflow = navDrawer.classList.contains('active') ? 'hidden' : 'initial';
        });
    }

    /* --- APPLICATION FORM LOGIC (NEW) --- */
    const applicationForm = document.getElementById('applicationForm');
    const formContainer = document.getElementById('applyFormContainer');
    const successMessage = document.getElementById('applySuccessMessage');

    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            // 1. Stop the page from refreshing
            e.preventDefault();

            // 2. Hide the form with a nice fade effect (optional)
            formContainer.style.display = 'none';

            // 3. Show the success message
            successMessage.classList.remove('hidden');
            
            // 4. Scroll to top so user sees the message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    /* --- POST JOB FORM LOGIC --- */
const postJobForm = document.getElementById('postJobForm');
const postSuccessMessage = document.getElementById('postSuccessMessage');

if (postJobForm) {
    postJobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide the form fields
        postJobForm.style.display = 'none';
        // Hide the initial heading and text
        document.querySelector('.form-box h2').style.display = 'none';
        document.querySelector('.form-box p').style.display = 'none';
        
        // Show the rocket success message
        postSuccessMessage.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

});
