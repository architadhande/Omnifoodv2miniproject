const fname = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const zipcode = document.getElementById("zipcode");
const age = document.getElementById("age");

function formValidation() {
  if (fname.value == "") {
    alert("Please enter your full name.");
    fname.focus();
    return false;
  }
  // checking name length
  if (fname.value.length < 2 || fname.value.length > 30) {
    alert("Name length should be more than 2 and less than 21");
    fname.focus();
    return false;
  }
  if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  if (phone.value == "") {
    alert("Please enter your phone number.");
    phone.focus();
    return false;
  }
  // checking phone number
  if (!phone.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number");
    phone.focus();
    return false;
  }
  if (age.value == "") {
    alert("Please enter your age.");
    age.focus();
    return false;
  }
  if (age.value < 18) {
    alert("You must be above 18.");
    age.focus();
    return false;
  }
  if (zipcode.value == "") {
    alert("Please enter your zipcode.");
    zipcode.focus();
    return false;
  }

  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }
  return true;
}
