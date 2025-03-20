$(document).ready(function() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = $("#userList");

    if(users.length === 0) {
        alert("No users registered yet");
    }else{
        users.forEach(user => {
            userList.append(`<li> First Name : ${user.fname},
                Last Name : ${user.lname},
                Email : ${user.email}</li>`);
        });
    }

});