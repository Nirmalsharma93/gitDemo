'use strict';
var app = angular.module('eventsApp');
app.controller('EventController', function($scope) {
        $scope.event={
                    name:'Anuglar boot camp',
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
                    name:'Directive class',
                    creatorName:'Ankit',
                    level:'Novice',
                    upVoteCount:0
                },
                {
                    name: 'PluralSight class',
                    creatorName:'Pukhraj',
                    level:'Pro',
                    upVoteCount:0
                },
                {
                    name: 'Atos syntel class',
                    creatorName:'Sagar',
                    level:'Intermediate',
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