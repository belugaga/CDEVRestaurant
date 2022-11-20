function submitFeedback() {
    //console.log(username1);
    var submitUserFeedback = new XMLHttpRequest();
  
    submitUserFeedback.open("POST", "/feedback", true);
    submitUserFeedback.setRequestHeader("Content-Type", "application/json");
    submitUserFeedback.onload = function () {
        
        $('#failModal').modal('hide');
        $('#successModal').modal('show');
        
      
    };
    
    document.getElementById("usernameFeedback").value = username2;
    var email = document.getElementById("emailFeedback").value;
    var contactNumber = document.getElementById("contactFeedback").value;
    var review = document.getElementById("inputFeedback").value;
    
  
    var payload = { usernameFK2:username2, email:email, contactNumber:contactNumber, feedback:review };
  
    submitUserFeedback.send(JSON.stringify(payload));
    
    document.getElementById("feedbackForm").reset();
    
    
  
}