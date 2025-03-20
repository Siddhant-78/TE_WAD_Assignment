
$(document).ready(function() {
    const form = $("#registrationForm");
    $("#btn").click(function(){
     const user = {
         fname: $("#fname").val(),
         lname: $("#lname").val(),
         email: $("#email").val(),
         
     };
 
     let users = JSON.parse(localStorage.getItem("users")) || [];
     users.push(user);
     localStorage.setItem("users", JSON.stringify(users));
 
     alert("User registered successfully");
 
    form.reset(); 
    });
 });
 