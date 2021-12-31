function formData() {
  var fname = document.forms["userform"]["firstname"];
  var email = document.forms["userform"]["emailid"];
  var phone = document.forms["userform"]["phoneno"];
  var interest = document.forms["userform"]["interested"];

  if (fname.value == ""){
  window.alert("Pleasr enter your Name!");
  fname.focus();
  return false;
  }

  if (email.value == ""){
  window.alert("Pleasr enter your Email!");
  email.focus();
  return false;
  }

  if (phone.value == ""){
  window.alert("Pleasr enter your Phone!");
  phone.focus();
  return false;
  }

  if (interest.value == "Interested In :"){
  window.alert("Pleasr enter your Interest!");
  interest.focus();
  return false;
  }

  return true;
  }
