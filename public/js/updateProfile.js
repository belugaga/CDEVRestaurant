function updateInd() {

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/updateuser", true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    updateUser.onload = function () {
        
        
        $('#successModal').modal('show');
        
    }
    
    name2 = document.getElementById('name1').value
    gender2 = document.getElementById('gender1').value
    address2 = document.getElementById('address1').value
    email2 = document.getElementById('email1').value
    mobile2 = document.getElementById('mobile1').value
    profile_pic2 = document.getElementById('admin1').value;
    
    
    
    var payload = { name:name2,gender:gender2,address:address2,email:email2,mobile:mobile2,profile_pic:profile_pic2,token:token};

    //console.log("payload = " + payload)

    updateUser.send(JSON.stringify(payload));

}