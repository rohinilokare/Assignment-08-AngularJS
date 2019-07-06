var mainMod = angular.module('ThingCounterApp', []);

mainMod.controller('myCtrl',[function($scope) {
  var self = this ;
  self.label = 'label';
  self.color = 'yellow';
  self.submit = function() {
        console.log('User clicked submit with ',
            self.label, self.color);
      };

}]);

mainMod.directive('myCounter', function() {
  return {
    template : '<div class="button_group"><button ng-click="decrement()" style="background-color:{{color}}"><span class = "minus"> - </span></button><button style="background-color:{{color}}">label:{{label}}</button><button style="background-color:{{color}}">count:{{count}}</button><button ng-click="increment()" style="background-color:{{color}}"><span class = "plus"> + </span></button></div><div></div>',
    restrict: 'E',
    link:function(scope,elm,attr) {
       scope.count = 0;
       scope.increment = function(){
       scope.count = scope.count + 1
       return scope.count;
       }

      scope.decrement = function(){
        scope.count = scope.count - 1;
        return scope.count;
    }
    }
  };
});

