function validateform(form) {
  var uid = form.uid.value;
  var password1 = form.pw1.value;
  var name = form.name.value;
  var country = form.country.value;
  var email = form.email.value;
  var sex = form.sex.value;
  var english = form.eng.checked;
  var nonenglish = form.neng.checked;

  if (uid === "" || password1 === "" ||  name === "" || country === "" || email === "" || sex === "" || (!english && !nonenglish)) {
    alert("Please fill in all required fields.");
    return false;
  }

  if (uid.length < 5 || uid.length > 12) {
    alert("User ID must be between 5 and 12 characters.");
    return false;
  }

  if (password1.length < 7 || password1.length > 12 || password1.length < 1) {
    alert("Password must be between 7 and 12 characters.");
    return false;
  }


  if (!/^[a-zA-Z]+$/.test(name)) {
    alert("Name must contain alphabets only.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}