document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("registerError");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    error.textContent = "Please fill in all fields.";
    return;
  }

  // Dummy registration logic (replace with API call if needed)
  if (email === "user@example.com") {
    error.textContent = "This email is already registered.";
  } else {
    alert("Registration successful!");
    error.textContent = "";
    // Optionally clear the form
    document.getElementById("registerForm").reset();
  }
});
