var express = require("express"); //using the express web framework

var restaurantController = require('./controllers/restaurantController');
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');
var feedbackController = require('./controllers/feedbackController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.


app.route('/restaurant').get(restaurantController.getAllRestaurants);
app.route('/restaurant/category').get(restaurantController.getAllRestaurantsByCategory);
app.route('/restaurant/halal').get(restaurantController.getAllRestaurantsByHalal);
app.route('/restaurant/search').get(restaurantController.getRestaurantByName);
app.route('/restaurant/region').get(restaurantController.getRestaurantByRegion);

app.route('/comment').get(commentController.getAllComments); 
app.route('/comment/rname').get(commentController.getAllCommentsByRestaurantName);
app.route('/comment/user').get(commentController.getAllCommentsByUser);
app.route('/addcomment').post(commentController.addComment); 
app.route('/comment/:id').put(commentController.updateComment); 
app.route('/comment/del/:id').delete(commentController.deleteComment); 

app.route('/adduser').post(userController.addUser);
app.route('/updateuser').put(userController.updateUser);
app.route('/user/del/:username').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);
app.route('/user').post(userController.getUser);

app.route('/feedback').post(feedbackController.addFeedback);

app.listen(process.env.PORT || 8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 
