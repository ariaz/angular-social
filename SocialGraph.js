'use strict';


var generateData = require('./DataGenerator');

/**
 * SocialGraph: manage social network data for users
 * @param {Object} data: loads backend data (generated from DataGenerator
 * 	 for this example)
 */
var SocialGraph = function (data) {

	this.data = data;
}

SocialGraph.prototype = {

	/**
	 *	Determines if user exists in social network
	 *	@param {Integer} userId
	 */
	userExists: function (userId) {

		return this.data[userId] !== undefined;
	},

	/**
	 *	Get user name
	 *	@param {Integer} userId
	 */
	getName: function (userId) {

		if (!this.userExists(userId)) return null;

		return this.data[userId].name;
	},

	/**
	 *	Get user friends
	 *	@param {Integer} userId
	 */
	getFriends: function (userId) {

		if (!this.userExists(userId)) return [];

		var friends = [],
			friendsIdx = this.data[userId].friends,
			numFriends = friendsIdx.length;

		for (var i = 0; i < numFriends; i++) {
			friends.push({
				userId: friendsIdx[i],
				name: this.data[friendsIdx[i]].name
			});
		}
		return friends;
	},


	/**
	 *	Get user news feed
	 *	@param {Integer} userId
	 */
	getNewsFeed: function (userId) {

		if (!this.userExists(userId)) return [];

		var data = this.data,
			friends = data[userId].friends,
			numFriends = friends.length,
			comments = [],
			friend, friendName, friendIdx,
			i;

		for (i = 0; i < numFriends; i++) {
			friendIdx = friends[i];
			comments = comments.concat(data[friendIdx].comments);
		}

		// add self comments
		comments = comments.concat(data[userId].comments);

		// sort descending by posted date
		comments.sort(function(c1, c2){
			return c2.time - c1.time;
		});

		return comments;
	},

	/**
	 *	Get all user data - for convenience and avoiding making multiple requests
	 *	@param {Integer} userId
	 */
	getProfileData: function (userId) {

		var userData = {};

		userData.name = this.getName(userId);
		userData.friends = this.getFriends(userId);
		userData.newsFeed = this.getNewsFeed(userId);

		return userData;
	},


	/**
	 *	Post a new comment by user: userId
	 *	@param {Integer} userId
	 *	@param {Strinc} comment
	 */
	postComment: function (userId, comment) {

		var data = this.data,
			user = data[userId],
			name = user.name;

		user.comments.push({
			userId: userId,
			name: name,
			time: new Date().getTime(),
			comment: comment
		});
	}
}


// Initialize sample Social Network graph
function initGraph () {

	var data = generateData();

	var socialGraph = new SocialGraph(data);

	return socialGraph;
}

module.exports = initGraph();


