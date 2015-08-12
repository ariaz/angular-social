'use strict';

/**
 *  Uses Profile Service and route parameters to create a Profile instance
 	  @param {Object} $scope: controller scope
 	  @param {Object} $routeParams: contains url parameters
 	  @param {Function} Profile: Profile service that communicates with backend 
 */
var ProfileCtrl = function($scope, $routeParams, Profile) {

  $scope.profile = new Profile($routeParams.userId);
};

module.exports = ProfileCtrl;