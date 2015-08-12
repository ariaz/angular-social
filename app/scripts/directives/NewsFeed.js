'use strict';

/**
 * NewsFeed: basic directive operating under ProfileCtrl
 *   In charge of printing user's news feed
 */
var NewsFeed = function () {
	
	return {
		restrict: 'A',
		scope: true,
		templateUrl: './views/newsFeedTmpl.html'
	}
}

module.exports = NewsFeed;