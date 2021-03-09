//info valid function checks in name is entered, email is entered (bootstrap by default includes abilities to check for '@' sign), and phone and days avaioable are entered.
function infoValid() {
    //declaring variables so repeat variables are easy to type out and read
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    //logic checks if the required fields are accurate, in order of appearance
    if (name == ""){
      alert("You must enter a value for name");
      document.forms["contactUs"]["name"].focus();
    }
    else if (email == "") {
      alert("You must enter a value for email.");
      document.forms["contactUs"]["email"].focus();
    }
    else if (isPhoneNumber(phone) == false) {
      alert("You must enter in a ten digit phone number.")
      document.forms["contactUs"]["phone"].focus();
    }
    else if (document.getElementById("monday").checked == false && document.getElementById("tuesday").checked == false
    && document.getElementById("wednesday").checked == false && document.getElementById("thursday").checked == false &&
    document.getElementById("friday").checked == false) {
      alert("You must check at least one day.");
    }
    else {
      alert("All required fields were filled in.")
    }
  
    return false;
  }
  
  //used within the infovalid function to check that the phone number is not just entered, but entered as an actual phone number
  function isPhoneNumber(phone) {
    var check1 = true;
    var check2 = true;
  //first check checks if the phone number is in the format ###-###-####
    for (var i = 0; i < 3; i++) {
      if (check1 == true) {
        if (isNaN(phone[i])) {
          check1 = false;
        }
        else {
          check1 = true;
        }
      }
    }
    if (check1 == true && phone[3] == "-") {
      check1 = true;
    }
    else {
      check1 = false;
    }
    for (var i = 4; i < 7; i++) {
      if (check1 == true) {
        if (isNaN(phone[i])) {
          check1 = false;
        }
        else {
          check1 = true;
        }
      }
    }
    if (check1 == true && phone[7] == "-") {
      check1 = true;
    }
    else {
      check1 = false;
    }
    for (var i = 8; i < 12; i++) {
      if (check1 == true) {
        if (isNaN(phone[i])) {
          check1 = false;
        }
        else {
          check1 = true;
        }
      }
    }
  
  //second check if the user enters in just ten numbers with no "-" symbols, it will still allow it.
    for (var i = 0; i < 10; i++) {
      if (check2 == true) {
        if (isNaN(phone[i])) {
          check2 = false;
        }
        else {
          check2 = true;
        }
      }
    }
    if (check1 == true || check2 == true) {
      return true;
    }
    else {
      return false;
    }
  }