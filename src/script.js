document.getElementById("checkBtn").onclick = function () {
  var name = document.getElementById("user").value;
  var phoneNumber = document.getElementById("mobNumber").value;

  if (
name == "" || !isNaN(name) || name == " " || phoneNumber == "" || phoneNumber == " " || isNaN(phoneNumber)
) {
    document.getElementById("demo").innerHTML = "Please Enter a name first!!";
    document.getElementById("demoTwo").innerHTML = "Please enter a number";
    document.getElementById("user").style.border = "5px solid red";
    document.getElementById("mobNumber").style.border = "5px solid red";
  } else {
    document.getElementById("demo").innerHTML = name;
    document.getElementById("demoTwo").innerHTML = phoneNumber;
    document.getElementById("user").style.border = "1px solid black";
    document.getElementById("mobNumber").style.border = "1px solid black";
  }
  if(name=="" || name==" " || !isNaN(name)){
    document.getElementById("demo").innerHTML = "Please Enter a name first!!";
    document.getElementById("user").style.border = "5px solid red";
  }else{
    document.getElementById("demo").innerHTML = name;
    document.getElementById("user").style.border = "1px solid black";
  }
  if(phoneNumber == "" || phoneNumber == " " || isNaN(phoneNumber)){
    document.getElementById("demoTwo").innerHTML = "Please enter a number";
    document.getElementById("mobNumber").style.border = "5px solid red";
  }else{
    document.getElementById("demoTwo").innerHTML = phoneNumber;
    document.getElementById("mobNumber").style.border = "1px solid black";

  }
  if(phoneNumber.length !==10){
    document.getElementById("demoTwo").innerHTML = "Phone should be of 10 digits!!";
    document.getElementById("mobNumber").style.border = "5px solid red";
  }else{
    document.getElementById("demoTwo").innerHTML = phoneNumber;
    document.getElementById("mobNumber").style.border = "1px solid black";
  }

};
