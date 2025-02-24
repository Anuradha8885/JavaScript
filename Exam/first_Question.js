Write a JavaScript program for accepting name and mobile number from user and
perform following validation: [20 Marks]
a) Check all fields should not contain a null value
b) Check name field contains only alphabets
c) Mobile No. field should be of 10 digits long.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Validation</title>
  </head>
  <body>
    <h2>Form Validation</h2>

    <form onsubmit="return validateForm()">
      <label for="name"> Name:</label>
      <input type="text" id="name" name="name" /><br />
      <br />

      <label for="mobile">mobile Number:</label>
      <input type="tel" id="mobile" name="mobile" /><br />
      <br />

      <input type="submit" value="submit" />
    </form>
  </body>
  <script>
    function validateForm() {
      var name = document.getElementById("name").value;
      var mobile = document.getElementById("mobile").value;

      if (name == "" || mobile == "") {
        alert("All fields are required.");
        return false;
      }

      var namePattern = /^[A-Za-z]+$/;
      if (!name.match(namePattern)) {
        alert("Name should contain only alphabets.");
        return false;
      }

      var mobilePattern = /^[0-9]{10}$/;
      if (!mobile.match(mobilePattern)) {
        alert("Mobile number should be exactly 10 digits long.");
        return false;
      }

      alert("Form submitted successfully.");
      return true;
    }
  </script>
</html>
