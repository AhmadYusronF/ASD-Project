   document.addEventListener('DOMContentLoaded', () => {
            const passwordVisibilityToggle = document.getElementById('password-visibility-toggle');
            const passwordField = document.getElementById('password-field');
            const passwordVisibilityIcon = document.getElementById('password-visibility-icon');

            if (passwordVisibilityToggle) {
                passwordVisibilityToggle.addEventListener('click', () => {
                    const isPasswordVisible = passwordField.type === 'text';
                    passwordField.type = isPasswordVisible ? 'password' : 'text';
                    passwordVisibilityIcon.classList.toggle('fa-eye', isPasswordVisible);
                    passwordVisibilityIcon.classList.toggle('fa-eye-slash', !isPasswordVisible);
                });
            }
        });