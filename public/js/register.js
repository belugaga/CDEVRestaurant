function registerMe(){

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", '/adduser', true);
    registerUser.setRequestHeader("Content-Type","application/json");
    registerUser.onload = function() {

        $('#registerModal').modal('hide');
        $('#successModal').modal({backdrop: 'static', keyboard: false});
        setTimeout(() => {  window.location.reload('index.html'); }, 2000);
        
        
    }

    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    var name = document.getElementById("name1").value;
    var gender = document.getElementById("gender1").value;
    //var gender2 = document.getElementById("female").value;
    var address = document.getElementById("address1").value;
    var email = document.getElementById("email1").value;
    var mobile = document.getElementById("mobile1").value;
    var profile_pic = document.getElementById("profile_pic1").value;
    var payload = {username:username, password:password, name:name, gender:gender, address:address, email:email, mobile:mobile, profile_pic:profile_pic}
    
    registerUser.send(JSON.stringify(payload));
    
}