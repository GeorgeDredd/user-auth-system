// Get the form by its id
const registrationForm = document.getElementById("registration-form");
const loginForm = document.getElementById("login-form");

// Add an event listener for registration form submission
if(registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally 
        registerUser();
    });
}

// Add an event listener for login form submission
if(loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally 
        loginUser();
    });
}

// Function to handle registration
function registerUser() {
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const cpassword = document.getElementById("reg-cpassword").value;

     // Hash the password (you can use a library like bcrypt.js if needed)
     

    //  Create a user object
    const user = {
        username,
        email,
        password,
        cpassword,
    }

    // store user data in local storage
    localStorage.setItem(email, JSON.stringify(user));

    alert('Registration successful! You can now login in');

    // Redirect the user to login page
    window.location.href = "login.html";
}

// Function to handle login
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from local storage
    const userData = localStorage.getItem(email);

    if(userData) {
        const user = JSON.parse(userData);

        // Compare the entered password with the stored password
        if (user.password === password) {
            alert('Login successful');

            // Redirect the user to user page
            window.location.href = "user.html";
        } else {
            alert('Invalid password');
        }
    } else {
        alert('User not found. Please enter correct details or Sign Up')
    }
}