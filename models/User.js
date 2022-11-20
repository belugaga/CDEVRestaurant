"use strict";

class User { //class MUST BE IN CAPITAL LETTERS
    constructor(username, password, name, gender, address, email, mobile, profile_pic) {
        this.username = username; //to differentiate the two id
        this.password = password;
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.mobile = mobile
        this.profile_pic = profile_pic;
    }
//add the set and get methods here
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getAddress() {
        return this.address;
    }
    getEmail() {
        return this.email;
    }
    getMobile() {
        return this.mobile;
    }
    getProfile_pic() {
        return this.profile_pic;
    }
    

    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    setName(name) {
        this.name = name;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setAddress(address) {
        this.address = address;
    }
    setEmail(email) {
        this.email = email;
    }
    setMobile(mobile) {
        this.mobile = mobile;
    }
    setProfile_pic(profile_pic) {
        this.profile_pic = profile_pic;
    } 
}

module.exports = User;