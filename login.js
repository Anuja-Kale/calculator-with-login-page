$(document).ready(() => {
	$("#login-form").submit((e) => {
	e.preventDefault();
	const username = $("input[name='username']").val();
	const password = $("input[name='password']").val();
	const email = $("input[name='email']").val();
	let valid = true;
	$("#error-msg").html("");
	// Username validation
	const usernameRegex = /^[a-z]+$/;
	if (!usernameRegex.test(username)) {
	valid = false;
	$("#error-msg").html("Invalid username (only lowercase alphabets allowed)");
	}
	// Password validation
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?])\S{8,}$/;
if (!passwordRegex.test(password)) {
  valid = false;
  $("#error-msg").html("Invalid password (must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit and one special character)");
}

// Email validation
const emailRegex = /^[^\s@]+@northeastern\.edu$/i;
if (!emailRegex.test(email)) {
  valid = false;
  $("#error-msg").html("Invalid email (must be a valid Northeastern University email)");
}

if (valid) {
  // Redirect to calculator.html with username as query parameter
  window.location.href = "calculator.html?username=" + encodeURIComponent(username);
}
});
});