document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return;
    }

    if (password === "") {
        alert("Please enter your password");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Form submitted successfully ✅");
    document.getElementById("myForm").reset();
}

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}