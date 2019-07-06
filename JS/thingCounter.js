var mainMod = angular.module('ThingCounterApp', []);

mainMod.controller('myCtrl',function($scope) {
	    $scope.records = [
       {
            "label" : "counter1",
            "color" : "pink"
        },{
            "label" : "counter2",
            "color" : "green"
        },{
            "label" : "counter3",
            "color" : "white"
        },{
            "label" : "counter4",
            "color" : "yellow"
        }
    ]

  // var self = this ;
  // self.label = 'label';
  // self.color = 'yellow';
  // self.submit = function() {
  //       console.log('User clicked submit with ',
  //           self.label, self.color);
  //     };
  			 // $scope.label = []
  			 // $scope.label.push('rohini');
      // $scope.label = new Array;
      // $scope.label.push(label);
});

mainMod.directive('myCounter', function() {
  return {
    template : '<div ng-repeat="x in records"><div class="button_group"><button ng-click="decrement()" style="background-color:{{x.color}}"><span class = "minus"> - </span></button><button style="background-color:{{x.color}}">label :{{ x.label }}</button><button style="background-color:{{x.color}}">count:{{count}}</button><button ng-click="increment()" style="background-color:{{x.color}}"><span class = "plus"> + </span></button></div><div class="space-for-buttons"></div></div>',
    restrict: 'E',
    link:function(scope,elm,attr) {
       scope.count = 0

       scope.increment = function(){
       scope.count ++ ;
       }

      scope.decrement = function(){
        scope.count -- ;
    	}

    }
  };
});

