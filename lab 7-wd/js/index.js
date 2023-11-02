$(document).ready(function () {
    const loginForm = $('#loginForm');
    const emailInput = $('#email');
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');
    const loginButton = $('#loginButton');

            function validateEmail() {
                const email = emailInput.val();
                const emailError = $('#emailError');
                if (email.length === 0) {
                    emailError.text('Please fill in the Email field.').show();
                } else if (!email.endsWith('@northeastern.edu')) {
                    emailError.text('Email must end with @northeastern.edu.').show();
                } else {
                    emailError.text('').hide();
                }
            }

            function validateUsername() {
                const username = usernameInput.val();
                const usernameError = $('#usernameError');
                const usernameRegex = /^[a-zA-Z_]{4,20}$/;
                if (!username.match(usernameRegex)) {
                    usernameError.text('Invalid username format.').show();
                } else {
                    usernameError.text('').hide();
                }
            }

            function validatePassword() {
                const password = passwordInput.val();
                const passwordError = $('#passwordError');
                if (password.length === 0) {
                    passwordError.text('Please fill in the Password field.').show();
                } else {
                    passwordError.text('').hide();
                }
            }

            function validateConfirmPassword() {
                const confirmPassword = confirmPasswordInput.val();
                const confirmPasswordError = $('#confirmPasswordError');
                if (confirmPassword !== passwordInput.val()) {
                    confirmPasswordError.text('Passwords do not match.').show();
                } else {
                    confirmPasswordError.text('').hide();
                }
                updateLoginButtonState();
            }
            function updateLoginButtonState() {
        // Check all validation errors
        const emailError = $('#emailError').text();
        const usernameError = $('#usernameError').text();
        const passwordError = $('#passwordError').text();
        const confirmPasswordError = $('#confirmPasswordError').text();

        // Enable the button only if there are no validation errors
        if (!emailError && !usernameError && !passwordError && !confirmPasswordError) {
            loginButton.prop('disabled', false);
        } else {
            loginButton.prop('disabled', true);
        }
    }

            // Add keyup event listeners
            emailInput.on('keyup', validateEmail);
            usernameInput.on('keyup', validateUsername);
            passwordInput.on('keyup', validatePassword);
            confirmPasswordInput.on('keyup', validateConfirmPassword);

            // Add blur event listeners
            emailInput.on('blur', validateEmail);
            usernameInput.on('blur', validateUsername);
            passwordInput.on('blur', validatePassword);
            confirmPasswordInput.on('blur', validateConfirmPassword);

            loginForm.on('submit', function (event) {
                event.preventDefault();

                // Check all validations again on form submission
                validateEmail();
                validateUsername();
                validatePassword();
                validateConfirmPassword();

                // If any validation error exists, prevent form submission
                if ($('#emailError').text() || $('#usernameError').text() ||
                    $('#passwordError').text() || $('#confirmPasswordError').text()) {
                    return;
                }

                const username = usernameInput.val();

                // Redirect to calculator.html with the username as a query parameter
                window.location.href = `calculator.html?username=${username}`;
            });
        });