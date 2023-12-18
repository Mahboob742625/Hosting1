$(document).ready(function(){
    $("#loginForm").submit(function(event) {
      event.preventDefault();

      // Custom validation logic
      var valid = true;

      // Mobile validation
      var mobileValue = $("#mobile").val();
      var mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobileValue)) {
        $("#mobileError").text("Enter a valid 10-digit mobile number");
        valid = false;
      } else {
        $("#mobileError").text("");
      }

      // Password validation
      var passwordValue = $("#password").val();
      if (passwordValue.trim() === "") {
        $("#passwordError").text("Password is required");
        valid = false;
      } else {
        $("#passwordError").text("");
      }

      // If all fields are valid, submit the form
      if (valid) {
        alert("Login successful!");
        // Add your login submission logic here
      }
    });
  });