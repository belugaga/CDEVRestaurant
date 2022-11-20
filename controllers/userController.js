"use strict";

const UsersDB = require("../models/UsersDB");
const User = require("../models/User");
const bcrypt = require("bcrypt");

var usersDB = new UsersDB();
var jwt = require("jsonwebtoken");
var secret = "somesecretkey";

function addUser(request, respond) {
  var username = request.body.username;
  var password = request.body.password;
  var name = request.body.name;
  var gender = request.body.gender;
  var address = request.body.address;
  var email = request.body.email;
  var mobile = request.body.mobile;
  //var profile_pic = request.body.profile_pic;
  password = bcrypt.hashSync(password, 10);

  var user = new User(
    username,
    password,
    name,
    gender,
    address,
    email,
    mobile
    //,profile_pic
  );
  usersDB.addUser(user, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json('{"status": "successful"}');
    }
  });
}

function updateUser(request, respond) {
  var token = request.body.token;
  var name = request.body.name;
  var gender = request.body.gender;
  var address = request.body.address;
  var email = request.body.email;
  var mobile = request.body.mobile;
  var profile_pic = request.body.profile_pic;
  try {
    var decoded = jwt.verify(token, secret);
    //console.log("decoded = " + decoded);
    usersDB.updateUser(name, gender, address, email, mobile, profile_pic, decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json('{"status": "successful"}');
      }
    });
  } catch (error) {
    respond.json({ result: "invalid token" });
  }
}

function deleteUser(request, respond) {
  var userID = request.params.username;
  //var userPass = request.body.password;
  usersDB.deleteUser(userID, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json('{"status": "successful"}');
    }
  });
}

function loginUser(request, respond) {
  var username = request.body.username;
  var password = request.body.password;

  var user = new User(username, null, null, null, null, null, null, null);

  
  usersDB.loginUser(user, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      
      const hash = result[0].password;
      
      var flag = bcrypt.compareSync(password, hash);

      if (flag) {
        var token = jwt.sign(username, secret);
        respond.json({ result: token });
      } else {
        respond.json({ result: "invalid" });
      }
      
    }
  });
}

function getUser(request, respond) {
  var token = request.body.token;

  try {
    var decoded = jwt.verify(token, secret);
    usersDB.getUser(decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
    
  } catch (err) {
    respond.json({ result: "invalid token" });
  }
  
}

module.exports = { addUser, updateUser, deleteUser, loginUser, getUser };
