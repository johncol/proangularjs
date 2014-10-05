'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
    .controller('TodoCtrl', function($scope) {

        var todo = {
            user: 'John',
            items: [{
                action: 'Start reading AngularJS Pro',
                done: true
            }, {
                action: 'Complete AngularJS Pro',
                done: false
            }, {
                action: 'Dance Bachata',
                done: false
            }, {
                action: 'Play DmC',
                done: false
            }]
        };

        $scope.todo = todo;

        var addItem = function() {
            if ($scope.newItem !== undefined && $scope.newItem !== '') {
                $scope.todo.items.push({
                    action: $scope.newItem,
                    done: false
                });
                $scope.newItem = '';
            }
        };

        $scope.addItem = addItem;

        var warningPoint = 3;

        var incompleteItems = function() {
            var count = 0;
            angular.forEach($scope.todo.items, function(item) {
                if (!item.done) {
                    count++;
                }
            });
            return count;
        };

        $scope.incompleteItems = incompleteItems;

        var tooManyItemsToDo = function() {
            return incompleteItems() > warningPoint;
        };

        $scope.tooManyItemsToDo = tooManyItemsToDo;

        var warningLevel = function() {
            return tooManyItemsToDo() ? 'label-warning' : 'label-success';
        }

        $scope.warningLevel = warningLevel;

    });