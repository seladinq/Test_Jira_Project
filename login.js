document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Simple validation
  if (email === "" || password === "") {
    error.textContent = "Please fill in both fields.";
    return;
  }

  // Dummy check (you can replace with real API call)
  if (email === "user@example.com" && password === "123456") {
    alert("Login successful!");
    error.textContent = "";
  } else {
    error.textContent = "Invalid email or password.";
  }
});
