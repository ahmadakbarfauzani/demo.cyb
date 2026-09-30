document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const emailGroup = document.getElementById('emailGroup');
    const passwordGroup = document.getElementById('passwordGroup');

    // Toggle Password Visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = togglePassword.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Handle Login Submission (Mocked)
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Reset errors
            emailGroup.classList.remove('has-error');
            passwordGroup.classList.remove('has-error');

            // Set loading state
            submitBtn.classList.add('loading');
            btnText.textContent = 'AUTHENTICATING...';
            submitBtn.disabled = true;

            // Mock validation and response delay
            setTimeout(() => {
                const emailVal = emailInput.value.toLowerCase();
                const passVal = passwordInput.value;

                // Simple mock logic: if it's not "admin@cybbali.com" and "password", throw error
                if (emailVal !== 'admin@cybbali.com' || passVal !== 'password') {
                    // Error state
                    submitBtn.classList.remove('loading');
                    btnText.textContent = 'SECURE LOGIN';
                    submitBtn.disabled = false;
                    
                    emailGroup.classList.add('has-error');
                    passwordGroup.classList.add('has-error');
                } else {
                    // Success state -> redirect to dashboard
                    btnText.textContent = 'REDIRECTING...';
                    window.location.href = 'admin.html';
                }
            }, 1500); // 1.5s artificial delay for loading state
        });
    }

    // Clear error on input focus
    const inputs = [emailInput, passwordInput];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('focus', () => {
                input.closest('.form-group').classList.remove('has-error');
            });
        }
    });
});
