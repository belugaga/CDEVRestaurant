$(document).ready(function(){

    var getAProfile = new XMLHttpRequest;

    getAProfile.open("POST", "/user", true)
    getAProfile.setRequestHeader("Content-Type","application/json");
    getAProfile.onload = function(){
        var profile = JSON.parse(getAProfile.responseText);
        console.log(getAProfile.responseText);
        var username2 = profile[0].username;
        

        document.getElementById('usernameFeedback').value = username2;
        document.getElementById('nickname').value = username2;
        
        
    }

    var payload = {token:token};
    getAProfile.send(JSON.stringify(payload));
})