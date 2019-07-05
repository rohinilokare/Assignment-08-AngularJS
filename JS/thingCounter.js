
var mainMod = angular.module('ThingCounterApp', []);

mainMod.service("CounterService", function(){
  var count = 0
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
  $scope.submitForm = function(){
      if (myForm.label.$valid) {
        alert('our form is amazing');
      }
      else{
        alert('please provide your label');
      }
  }

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
    template : '<h1>ActiveCounterList</h1><div style="color:{{color}}"class="button_group"><button ng-click="decrement()"><span class = "minus"> - </span></button><button>{{label}}</button><button>count:{{count}}</button><button ng-click="increment()"><span class = "plus"> + </span></button></div>'
  };
});

mainMod.addCounter = function(label,color){
  this.label = label;
  this.color = color
console.log(this.label);
console.log('in add counter function');
}
