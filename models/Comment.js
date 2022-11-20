"use strict";

class Comment { //class MUST BE IN CAPITAL LETTERS
    constructor(id, restaurant_id, restaurant_name, review, usernameFK, rating, datePosted) {
        this.id = id; //to differentiate the two id
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.usernameFK = usernameFK;
        this.review = review;
        this.datePosted = datePosted;
        this.rating = rating;
    }
//add the set and get methods here
    getId() {
        return this.id;
    }
    getRestaurant_id() {
        return this.restaurant_id;
    }
    getRestaurant_name() {
        return this.restaurant_name;
    }
    getReview() {
        return this.review;
    }
    getUsernameFK() {
        return this.usernameFK;
    }
    getRating() {
        return this.rating;
    }
    getDatePosted() {
        return this.datePosted;
    }

    setRestaurant_id(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }
    setRestaurant_name(restaurant_name) {
        this.restaurant_name = restaurant_name;
    }
    setReview(review) {
        this.review = review;
    }
    setUsernameFK(usernameFK) {
        this.usernameFK = usernameFK;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }

}

module.exports = Comment;