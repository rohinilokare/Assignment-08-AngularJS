var mainMod = angular.module('ThingCounterApp', []);

mainMod.service("CounterService", function(){
  label_array = [];
  this.label = 'rohiniCounter';
  console.log('in label service');
  this.color = 'yellow';

});

mainMod.controller('myCtrl',function($scope) {

  $scope.label = 'label';

  $scope.color = 'yellow';

});

mainMod.directive('myCounter', function() {
  return {
    template : '<div class="button_group"><button ng-click="decrement()"><span class = "minus"> - </span></button><button>{{label}}</button><button>count:{{count}}</button><button ng-click="increment()"><span class = "plus"> + </span></button></div><div></div>',
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

mainMod.addCounter = function(label,color){
  this.label = label;
  this.color = color
console.log(this.label);
console.log('in add counter function');
}

mainMod.controller('FormCtrl', function ($scope, $http) {
     var formData = {
        label: "default",
        color: "default",
    };

    $scope.save = function() {
        formData = $scope.form;
    };

    $scope.submitForm = function(label,color) {
      this.label = label;
      this.color = color;
      console.log(this.label)
        console.log("posting data....");
        formData = $scope.form;
        console.log(formData);
    };

 });
