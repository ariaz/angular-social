'use strict'

var express = require('express'),
    server = express(),
    SocialGraph = require('./SocialGraph');

server.use(express.static('./dist'));

server.all('/', function(req, res) {
    res.sendfile('/#/users/0', { root: 'dist' });
});

server.get('/getProfileData', function (req, res) {

  var userId = req.query.userId;

  var data = SocialGraph.getProfileData(userId);

  res.json(data);

});

server.get('/getFriends', function(req, res){

  var userId = req.query.userId,
      data = SocialGraph.getFriends(userId);
  res.json(data);
});

server.get('/getNewsFeed', function(req, res){

  var userId = req.query.userId,
      data = SocialGraph.getNewsFeed(userId);
  res.json(data);
});

server.post('/newComment', function(req, res){

  var userId = req.query.userId,
      comment = req.query.comment
      SocialGraph.postComment(userId, comment);

  res.json(SocialGraph.data[userId].comments);
});

console.log(SocialGraph);

module.exports = server;