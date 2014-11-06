'use strict';

var KINVEY_DEBUG = true;

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'kendo.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
