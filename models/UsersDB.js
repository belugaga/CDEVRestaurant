"use strict";

const { query } = require("express");
var db = require("../db-connections");
class UsersDB {
  addUser(user, callback) {
    var sql =
      "INSERT INTO user (username, password, name, gender, address, email, mobile) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      sql,
      [
        user.getUsername(),
        user.getPassword(),
        user.getName(),
        user.getGender(),
        user.getAddress(),
        user.getEmail(),
        user.getMobile(),
        
      ],
      callback
    );
  }

  getUser(username, callback) {
    var sql = "SELECT DISTINCT username, name, gender, address, email, mobile, profile_pic FROM projectdb.user WHERE username = ?";
    db.query(sql, [username], callback)
  }

  updateUser(name, gender, address, email, mobile, profile_pic, username, callback) {
    var sql =
      "UPDATE user SET name = ?, gender = ?, address = ?, email = ? , mobile = ?, profile_pic = ? WHERE username = ?";
    return db.query(
      sql,
      [
        name, gender, address, email, mobile, profile_pic, username
      ],
      callback
    );
  }

  deleteUser(userID, callback) {
    var sql = "DELETE from user WHERE username = ?";
    return db.query(sql, [userID], callback);
  }

  loginUser(user, callback) {
    var sql = "SELECT password FROM projectdb.user WHERE username = ?";
    
    db.query(sql, [user.getUsername()], callback);
  }
}

module.exports = UsersDB;
