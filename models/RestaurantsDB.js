"use strict";

const { query } = require("express");
var db = require("../db-connections");
class RestaurantsDB {
  getAllRestaurants(callback) {
    var sql = "SELECT * FROM projectdb.restaurant";
    db.query(sql, callback);
  }

  getAllRestaurantsByCategory(restaurant, callback) {
    var sql = "SELECT * FROM projectdb.restaurant WHERE category = ?";
    return db.query(sql, [restaurant.getCategory()], callback);
  }

  getAllRestaurantsByHalal(restaurant, callback) {
    var sql = "SELECT * FROM projectdb.restaurant WHERE halal = ?";
    return db.query(sql, [restaurant.getHalal()], callback);
  }

  getRestaurantByName(restaurant, callback) {
    var sql = "SELECT * FROM projectdb.restaurant WHERE name LIKE CONCAT('%', ?, '%')";
    return db.query(sql, [restaurant.getName()], callback);
  }

  getRestaurantByRegion(restaurant, callback) {
    var sql = "SELECT * FROM projectdb.restaurant WHERE region = ?";
    return db.query(sql, [restaurant.getRegion()], callback);
  }
}

module.exports = RestaurantsDB;
