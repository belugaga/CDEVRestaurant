function fetchComments() {
  var request = new XMLHttpRequest();

  request.open("GET", comment_url, true);

  request.onload = function () {
    comment_array = JSON.parse(request.responseText);
    console.log(comment_array);
  };

  request.send();
}

function showRestaurantComments(element) {
  document.getElementById("emptyComment").innerHTML =
    "No review yet. Create one now";
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("review").textContent =
    "Review for " + restaurant_array[item].name;
  document.getElementById("commentBody").textContent = "";

  for (var i = 0; i < comment_array.length; i++) {
    if (comment_array[i].restaurant_name === restaurant_array[item].name) {
      document.getElementById("emptyComment").innerHTML = "";
      selectedRestaurantId = restaurant_array[item]._id;
      star = "";
      var html =
        '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' +
        i +
        '">' +
        comment_array[i].review +
        "</p>               \
                                    <small>by " +
        comment_array[i].usernameFK +
        " @ " +
        comment_array[i].datePosted +
        "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
      document
        .getElementById("commentBody")
        .insertAdjacentHTML("beforeend", html);

      var star = "";
      for (var j = 0; j < comment_array[i].rating; j++) {
        console.log(i);
        star += "<img src='images/heart.png' style='width:50px' />";
      }
      star +=
        "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" +
        i +
        "' onClick='deleteComment(this)' ></i>";
      star +=
        "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" +
        i +
        "' onClick='editComment(this)' ></i>";
      document
        .getElementById("rating" + i)
        .insertAdjacentHTML("beforebegin", star + "<br/>");
    }
  }
}

function newComment() {
  if (token != null) {
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = username1;

  } else {
    $('#failModal').modal({backdrop: 'static', keyboard: false});
    
  }

  
}

function addComment() {
  var comment = new Object();
  comment.restaurant_id = restaurant_array[currentIndex]._id; 
  comment.restaurant_name = restaurant_array[currentIndex].name; 
  comment.usernameFK = document.getElementById("nickname").value; 
  comment.review = document.getElementById("userComments").value; 
  comment.datePosted = null; 
  comment.rating = rating;

  var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

  postComment.open("POST", addcomment_url, true); //Use the HTTP POST method to send data to server

  postComment.setRequestHeader("Content-Type", "application/json");
  postComment.onload = function () {
    console.log("new comment sent");
    fetchComments(); // fetch all comments again so that the web page can have updated comments.
  };
  // Convert the data in Comment object to JSON format before sending to the server.
  postComment.send(JSON.stringify(comment));
}

//This function allows the user to mouse hover the black and white heart
//so that it will turn to a colored version when hovered
function rateIt(element) {
  var num = element.getAttribute("value");
  var classname = element.getAttribute("class");
  var hearts = document.getElementsByClassName(classname);
  var classTarget = "." + classname;

  // This is another way of writing 'for' loop, which initialises the
  // heart images to use black and white.
  for (let heart of hearts) {
    heart.setAttribute("src", heartBWImage);
  }
  changeHeartImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when
// the mouse cursor hovers over the heart image.
function changeHeartImage(num, classTarget) {
  switch (eval(num)) {
    case 1:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", heartImage);
      rating = 1;
      break;
    case 2:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", heartImage);
      rating = 2;
      break;
    case 3:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", heartImage);
      rating = 3;
      break;
    case 4:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", heartImage);
      rating = 4;
      break;
    case 5:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", heartImage);
      document
        .querySelector(classTarget + "[value='5']")
        .setAttribute("src", heartImage);
      rating = 5;
      break;
  }
}

//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or restaurant review
function editComment(element) {
  
  var item = element.getAttribute("item");

  currentIndex = item;
  
  abc = comment_array[item].usernameFK;
  document.getElementById("editnickname").value = abc;
  
  if(abc == username1){
    document.getElementById("edituserComments").value = comment_array[item].review;
    console.log(comment_array[item].rating);
    displayColorHeart("editpop", comment_array[item].rating);
  } else{
    $('#errorModal').modal({backdrop: 'static', keyboard: false});
  }
  
  
}

//This function displayS the correct number of colored heart
//based on the movie rating that is given in the user comment
function displayColorHeart(classname, num) {
  var pop = document.getElementsByClassName(classname);
  var classTarget = "." + classname;
  for (let p of pop) {
    p.setAttribute("src", heartBWImage);
  }
  changeHeartImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {
  var response = confirm("Are you sure you want to update this comment?");
  if (response == true) {
    var edit_comment_url = comment_url + "/" + comment_array[currentIndex]._id;
    var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateComment.setRequestHeader("Content-Type", "application/json");
    comment_array[currentIndex].username =
      document.getElementById("editnickname").value;
    comment_array[currentIndex].review =
      document.getElementById("edituserComments").value;
    comment_array[currentIndex].rating = rating;
    updateComment.onload = function () {
      fetchComments();
    };
    updateComment.send(JSON.stringify(comment_array[currentIndex]));
  }
}

//This function deletes the selected comment in a specific restaurant
function deleteComment(element) {
  
  var item = element.getAttribute("item");
  var commentOwner = comment_array[item].usernameFK;
  if(commentOwner == username1){
    var response = confirm("Are you sure you want to delete this comment?");
    if (response == true) {
      var item = element.getAttribute("item"); 
      var delete_comment_url = comment_url + "/del/" + comment_array[item]._id;
      var eraseComment = new XMLHttpRequest();
      eraseComment.open("DELETE", delete_comment_url, true);
      eraseComment.onload = function() {
        fetchComments();
      };
      eraseComment.send();
    }
  } else {
    $('#errorModal').modal({backdrop: 'static', keyboard: false});
  }
    
}


