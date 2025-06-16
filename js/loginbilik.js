document.addEventListener('DOMContentLoaded', () => {
    const passwordVisibilityToggle = document.getElementById('password-visibility-toggle');
    const passwordField = document.getElementById('password-field');
    const passwordVisibilityIcon = document.getElementById('password-visibility-icon');
    const loginForm = document.getElementById('login-form');

    // Password visibility toggle
    if (passwordVisibilityToggle) {
        passwordVisibilityToggle.addEventListener('click', () => {
            const isPasswordVisible = passwordField.type === 'text';
            passwordField.type = isPasswordVisible ? 'password' : 'text';
            passwordVisibilityIcon.classList.toggle('fa-eye', isPasswordVisible);
            passwordVisibilityIcon.classList.toggle('fa-eye-slash', !isPasswordVisible);
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from submitting the normal way

            const username = document.getElementById('username-field').value.trim();
            const password = document.getElementById('password-field').value;

            // 🧠 Optional: replace this with real authentication
            if (username === "12345" && password === "password") {
                // Redirect to pemilihan.html
                window.location.href = "pemilihan.html";
            } else {
                alert("Username atau password salah.");
            }
        });
    }
});
