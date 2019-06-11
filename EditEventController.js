'use strict';
var app = angular.module('eventsApp');
app.controller('EditEventController', function($scope) {

    $scope.saveEvent = function(event,newEventForm)
    {
        if(newEventForm.$valid){
            window.alert('event'+event.name +'has been saved');
        }
    };
    $scope.cancelEdit = function()
    {
        window.location="NewEvent.html";
    };
    
});