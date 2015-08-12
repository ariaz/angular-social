'use strict';

/**
 * FriendsList: basic directive operating under ProfileCtrl
 *   In charge of printing list of friends
 */
var FriendsList = function () {
	
	return {
		restrict: 'A',
		scope: true,
		templateUrl: './views/friendsListTmpl.html'
	}
}

module.exports = FriendsList;