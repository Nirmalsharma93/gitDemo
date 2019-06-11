'use strict';
var app = angular.module('eventsApp');
app.controller('EventController', function($scope) {
        $scope.snippet='<span style="color:red">Hi There</span>';
        $scope.boolValue=false;
        // - helps in doing desc order. its being used with eventDetails.html's filter 
        $scope.sortOrder='name';
        $scope.event={
                    name:'Anuglar Boot camp',
                    date:'10/06/2019',
                    time:'11:25am',
                    location:{
                        address:'Atos Syntel office',
                        city:'Pune',
                        state:'MH'
                    },
                imageUrl:'img/angularjs-logo.png',
                 sessions:[
                {
                    name:'Directive class ',
                    creatorName:'Ankit',
                    level:'Novice',
                    duration:1,
                    upVoteCount:0
                },
                {
                    name: 'PluralSight class Novice',
                    creatorName:'Pukhraj',
                    level:'Pro',
                    duration:2,
                    upVoteCount:0
                },
                {
                    name: 'Atos syntel class',
                    creatorName:'Sagar',
                    level:'Intermediate',
                    duration:4,
                    upVoteCount:0
                }
            ]
    }

    $scope.upVoteSession= function(session)
    {
        session.upVoteCount++;
    }

    $scope.downVoteSession= function(session)
    {
        session.upVoteCount--;
    }

  });