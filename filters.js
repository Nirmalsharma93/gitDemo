'use strict';
var app = angular.module('eventsApp');
app.filter('durations', function(){
    return function(duration)
    {
        switch(duration)
        {
            case 1 : return "half hour";
            case 2 : return "one hour";
            case 3 : return "half day";
            case 4 : return "full day";
        }
    }

});
