count = 0
var mainMod = angular.module('ThingCounterApp', []);

// mainMod.controller('myCtrl',function($scope) {
//     //$scope.showpage = true;
//     $scope.label = 'rohiniCounter';
//     $scope.color = 'yellow'

// });

mainMod.service("CounterService", function(){
  this.increment = function(){
    count =count + 1;
    return count;
  };

  this.decrement = function(){
    count = count -1;
    return count;
  };

  this.label = 'rohiniCounter';
  console.log('in label service');
  this.color = 'yellow';

});

mainMod.controller('myCtrl',function($scope,CounterService ) {
  $scope.increment = function(){
    $scope.count = CounterService.increment();
  }

  $scope.decrement = function(){
    $scope.count = CounterService.decrement();
  }

  $scope.label = CounterService.label;

  $scope.color = CounterService.color;

});

mainMod.directive('myCounter', function() {
  return {
    template : '<h1>ActiveCounterList</h1><div style="color:{{color}}"class="button_group"><button ng-click="decrement()"><span class = "minus"> - </span></button><button>{{label}}</button><button>{{count}}</button><button ng-click="increment()"><span class = "plus"> + </span></button></div>'
  };
});


mainMod.addCounter = function(label,color){
  this.label = label;
  this.color = color
console.log(this.label);

}
