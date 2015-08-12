'use strict';

/**
 *	Profile - Angular Service in charge of communicating with back-end
 *		to request Profile info and post user comments
 *	@param {object} $http: angular-provided service for ajax
 */
var Profile = function ($http) {

	// Constructor
	var Profile = function(userId) {
		this.userId = userId;

		// initialize all profile data at creation
		this.getProfileData();
	}

	Profile.prototype = {

		// ajax call for user's news feed
		getNewsFeed: function () {
			var that = this;			
			$http.get('/getNewsFeed?userId=' + this.userId).success(function(data){
				that.newsFeed = data;
			});
		},

		// ajax call for users friends
		getFriends: function () {
			var that = this;
			$http.get('/getFriends?userId=' + this.userId).success(function(data){
				that.friends = data;
			});
		},

		// post users comment
		postComment: function () {

			var that = this;
			$http.post('/newComment?userId=' + this.userId + '&comment=' + that.newComment)
			  .success( function () {
			  	that.newComment = '';
			  	that.getNewsFeed();
			  });
		},

		// ajax call to get all data in one request (avoid multiple requests)
		getProfileData: function () {
			var that = this;			
			$http.get('/getProfileData?userId=' + this.userId).success(function(data){
				that.name = data.name;
				that.friends = data.friends;
				that.newsFeed = data.newsFeed;
			});
		}
	}

	return Profile;
}

module.exports = Profile;