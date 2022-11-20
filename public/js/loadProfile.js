$(document).ready(function(){

    var getProfile = new XMLHttpRequest;

    getProfile.open("POST", "/user", true)
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload = function(){
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);
        username1 = profile[0].username;
        name1 = profile[0].name;
        gender1 = profile[0].gender;
        address1 = profile[0].address;
        email1 = profile[0].email;
        mobile1 = profile[0].mobile;
        profile_pic1 = profile[0].profile_pic;

        document.getElementById('username1').value = username1;
        document.getElementById('name1').value = name1;
        document.getElementById('gender1').value = gender1;
        document.getElementById('address1').value = address1;
        document.getElementById('email1').value = email1;
        document.getElementById('mobile1').value = mobile1;
        document.getElementById('admin1').value = profile_pic1;

    }

    var payload = {token:token};
    getProfile.send(JSON.stringify(payload));
})