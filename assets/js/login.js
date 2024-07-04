function validation() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("password").value;

    if(a==""){
        document.getElementById("user-error").innerText="Username is required.";
        return false;
      }
      if(b==""){
        document.getElementById("pass-error").innerText="Password is required.";
        return false;
      }
      else{
        alert("Your credentials has been submitted successfully.");
      }
    }