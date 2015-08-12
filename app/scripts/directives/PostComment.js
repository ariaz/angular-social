'use strict';


/**
 * PostComment: basic directive operating under ProfileCtrl
 *   In charge of managing user comments
 */
var PostComment = function () {
	
	return {
		restrict: 'A',
		scope: true,
		templateUrl: './views/postCommentTmpl.html'
	}
}

module.exports = PostComment;