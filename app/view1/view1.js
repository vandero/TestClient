'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngResource', 'kendo.directives'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope, $resource) {
        console.log("Starting up");
        $scope.currentUser = "Robin";

        $scope.getUsers = function () {
            console.log("users requested");
            var usersApi = $resource("http://localhost:3000/users");
            $scope.users = usersApi.query();
        };

        $scope.pie = {
            title: {
                position: "bottom",
                text: "Share of Internet Population Growth"
            },
            seriesDefaults: {
                labels: {
                    visible: true,
                    background: "transparent",
                    template: "#= category #: #= value#%"
                }
            },
            series: [ 10, 20, 30 ]
        };

    });