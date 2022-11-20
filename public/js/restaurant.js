function getRestaurantData() {
  var request = new XMLHttpRequest();
  request.open("GET", restaurant_url, true);
  request.onload = function () {
    restaurant_array = JSON.parse(request.responseText);
    fetchComments();
    console.log(restaurant_array); // output to console
    displayRestaurants();
  };

  request.send();
}

function displayRestaurants() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count++) {
    var thumbnail = restaurant_array[count].pictures;
    var title = restaurant_array[count].name;
    var cell =
      '<div class="card col-md-4" ><img class="card-img-top" src="' +
      thumbnail +
      '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' +
      count +
      '" onClick="showRestaurantComments(this)"></i>\
                        <h5 style="padding-left:50px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      title +
      "</h5></div>\
</div>";
    table.insertAdjacentHTML("beforeend", cell);
    restaurantCount++;
    //}
  }

  message = restaurantCount + " Restaurants ";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
}

//This function is to display the individual restaurant details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("name").textContent = restaurant_array[item].name;
    document.getElementById("operating_hours").textContent = restaurant_array[item].operating_hours;
    document.getElementById("restaurantPictures").src = restaurant_array[item].pictures;
    document.getElementById("category").textContent = restaurant_array[item].category;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("contact_number").textContent = restaurant_array[item].contact_number;
    document.getElementById("about").textContent = restaurant_array[item].about;
    document.getElementById("allergies").textContent = restaurant_array[item].allergies;
    document.getElementById("halal").textContent = restaurant_array[item].halal;
}
