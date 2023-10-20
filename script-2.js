// Get the form by its id
const registrationForm = document.getElementById("registration-form");

// Add an event listener for form submission
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally 

// Retrieve user input
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const cPassword = document.getElementById("cpassword").value;

// You can perform additional validation here, e.g., checking if the fields are not empty, confirm passwords match.

// Handle form data (e.g., send it to the server for registration)
handleRegistration(username, email, password);

});


function handleRegistration(username, email, password) {
    // // Hash the password securely (e.g., using bcrypt)
    // const hashedPassword = hashedPassword(password);

    // Prepare the user object
    const user = {
        username: username,
        email: email,
        // password: hashedPassword,
        password: password,
    };

     // Save the user object to your JSON file (You'll need to implement this part)
     saveUserData(user);

      // Optionally, provide feedback to the user (e.g., registration successful)
      alert("Registration successful");

      // Redirect the user to another page or perform any necessary actions
      window.location.href = "index.html";
}


// function saveUserData(user) {
//     const fs = require('fs'); // Include the File System module
//     console.log(fs)

//     // Load the existing data from the JSON file
//     fs.readFile('users.json', 'utf8', (err, data) => {
//         if (err) {
//         // Handle the error, e.g., file not found
//         console.error('Error reading the file:', err);
//         } else {
//         // Parse the JSON data into an object
//         const userData = JSON.parse(data);
    
//         // Add the new user data to the array
//         userData.users.push(user);
    
//         // Convert the updated data back to JSON format
//         const updatedData = JSON.stringify(userData, null, 2);
    
//         // Write the updated data back to the JSON file
//         fs.writeFile('users.json', updatedData, (err) => {
//             if (err) {
//             // Handle the error, e.g., write permission issues
//             console.error('Error writing the file:', err);
//             } else {
//             console.log('User data saved successfully.');
//             }
//         });
//         }
//     });
// }
