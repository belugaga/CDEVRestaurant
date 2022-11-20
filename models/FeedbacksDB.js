"use strict";

const { query } = require('express');
var db = require('../db-connections');
class FeedbacksDB {
    addFeedback(feedback, callback) {
        var sql = "INSERT INTO projectdb.feedback (usernameFK2, email, contactNumber, feedback, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [feedback.getUsernameFK2(), feedback.getEmail(), feedback.getContactNumber(), feedback.getFeedback(), feedback.getDatePosted()], callback);
    }
}

module.exports = FeedbacksDB;