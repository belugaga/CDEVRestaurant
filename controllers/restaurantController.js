"use strict";
const RestaurantsDB = require('../models/RestaurantsDB');
const Restaurant = require('../models/Restaurant');

var restaurantsDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantsByCategory(request, respond){
    var restaurant = new Restaurant(null, null, null, null, null, null, null, null, null, null, request.body.category, null)
    restaurantsDB.getAllRestaurantsByCategory(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantsByHalal(request, respond){
    var restaurant = new Restaurant(null, null, null, null, null, null, null, null, request.body.halal, null, null, null)
    restaurantsDB.getAllRestaurantsByHalal(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantByName(request, respond) {
    var restaurant = new Restaurant(null, request.body.name, null, null, null, null, null, null, null, null, null, null)
    restaurantsDB.getRestaurantByName(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function getRestaurantByRegion(request, respond) {
    var restaurant = new Restaurant(null, null, null, null, null, null, null, null, null, null, null, request.body.region)
    restaurantsDB.getRestaurantByRegion(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllRestaurants,getAllRestaurantsByCategory,getAllRestaurantsByHalal,getRestaurantByName,getRestaurantByRegion};