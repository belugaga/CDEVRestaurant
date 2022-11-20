"use strict";

const { query } = require('express');
var db = require('../db-connections');
class CommentsDB {
    getAllComments(callback) {
        var sql = "SELECT * FROM projectdb.comment";
        db.query(sql, callback);
    }

    getAllCommentsByRestaurantName(comment, callback) {
        var sql = "SELECT * FROM projectdb.comment WHERE restaurant_id = ? AND restaurant_name = ?";
        db.query(sql, [comment.getRestaurant_id(), comment.getRestaurant_name()], callback);
    }

    getAllCommentsByUser(comment, callback) {
        var sql = "SELECT * FROM projectdb.comment WHERE usernameFK = ?";
        db.query(sql, [comment.getUsernameFK()], callback);
    }

    addComment(comment, callback) {
        var sql = "INSERT INTO comment (restaurant_id, restaurant_name, review, usernameFK, rating, datePosted) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [comment.getRestaurant_id(), comment.getRestaurant_name().trim(), comment.getReview(), comment.getUsernameFK(), comment.getRating(), comment.getDatePosted()], callback);
    }

    updateComment(comment, callback) {
        var sql = "UPDATE comment SET review = ?, rating = ?, datePosted = ? WHERE _id = ?";
        return db.query(sql, [comment.getReview(), comment.getRating(), comment.getDatePosted(), comment.getId()], callback);
    }

    deleteComment(commentID, callback) {
        var sql = "DELETE from comment WHERE _id = ?";
        return db.query(sql, [commentID], callback);
    }
}

module.exports = CommentsDB;