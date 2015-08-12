'use strict';

// imports
var angular = require('angular');
require('angular-route');


// App instance
var app = angular.module('myApp', ['ngRoute']);

// Angular client router
var Router = require('./Router');

// Angular Profile service
var Profile = require('./services/Profile');


// Angular controller imports
var ProfileCtrl = require('./controllers/ProfileCtrl');

// Angular directives imports
var NewsFeedDirective = require('./directives/NewsFeed');
var PostCommentDirective = require('./directives/PostComment');
var FriendsListDirective = require('./directives/FriendsList');


// Angular setup
app
	.config(['$routeProvider', Router])

	.factory('Profile', ['$http', Profile])

 	.controller('ProfileCtrl', ['$scope', '$routeParams', 'Profile', ProfileCtrl])

	.directive('postComment', PostCommentDirective)

	.directive('newsFeed', NewsFeedDirective)

	.directive('friendsList', FriendsListDirective);









