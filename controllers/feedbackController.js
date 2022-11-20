"use strict";

const FeedbacksDB = require('../models/FeedbacksDB');
const Feedback = require('../models/Feedback');

var feedbacksDB = new FeedbacksDB();

function addFeedback(request, respond) {
    var now = new Date();
    var feedback = new Feedback(null, request.body.usernameFK2, request.body.email, request.body.contactNumber, request.body.feedback, now.toString());
    feedbacksDB.addFeedback(feedback, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json('{"status": "successful"}');
        }
    })
};

module.exports = {addFeedback};