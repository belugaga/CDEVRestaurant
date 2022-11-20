"use strict";

const CommentsDB = require('../models/CommentsDB');
const Comment = require('../models/Comment');

var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    commentsDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllCommentsByRestaurantName(request, respond){
    var comment = new Comment(null, request.body.restaurant_id, request.body.restaurant_name, null, null, null, null);
    commentsDB.getAllCommentsByRestaurantName(comment, function(error, result){
        if(result.length==0){
            respond.json('{"status": "no comments yet for this restaurant"}')
        }
        else if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllCommentsByUser(request, respond){
    var comment = new Comment(null, null, null, null, request.body.usernameFK, null, null);
    commentsDB.getAllCommentsByUser(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addComment(request, respond) {
    var now = new Date();
    var comment = new Comment(null, request.body.restaurant_id, request.body.restaurant_name, request.body.review, request.body.usernameFK, request.body.rating, now.toString());
    commentsDB.addComment(comment, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json('{"status": "successful"}');
        }
    })
};

function updateComment(request, respond) {
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id), request.body.restaurant_id, request.body.restaurant_name, request.body.review, null, request.body.rating, now.toString());
    commentsDB.updateComment(comment, function(error, result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json('{"status": "successful"}');
        }
    });
}

function deleteComment(request, respond) {
    var commentID = request.params.id;
    commentsDB.deleteComment(commentID, function(error, result){
        if(error){
            respond.json(error);
        }
        else {
            respond.json('{"status": "successful"}');
        }
    });
}

module.exports = {getAllComments, getAllCommentsByRestaurantName,getAllCommentsByUser,addComment,updateComment,deleteComment};