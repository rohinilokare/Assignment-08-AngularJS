var mainMod = angular.module('ThingCounterApp', []);

mainMod.service('CounterService',function(){
  this.addCounter = function($scope){
    var counter = {
      initial_count: 0,
      label:$scope.label,
      color: $scope.color
    }
    $scope.counters.push(counter)
    console.log($scope.counters)
  }
});

mainMod.controller('counterController',function($scope,CounterService) {
  $scope.showForm = function(){
      $scope.hideform = true;
  }

  $scope.SubmitForm = function()
  {
    console.log('in submit form')
    CounterService.addCounter($scope)
    refreshForm();
  }

  function refreshForm()
    {
      $scope.color = '';
      $scope.label = '';
      $scope.hideform = false;
    }

    $scope.counters = [];
});

mainMod.directive('myCounter', function() {
  return {
    template : '<div ng-repeat="counter in counters track by $index"><div class="button_group"><button ng-click="decrement($index)" style="background-color:{{counter.color}}"><span class = "minus"> - </span></button><button style="background-color:{{counter.color}}">label :{{ counter.label }}</button><button style="background-color:{{counter.color}}">count:{{counter.initial_count}}</button><button ng-click="increment($index)" style="background-color:{{counter.color}}"><span class = "plus"> + </span></button></div><div class="space-for-buttons"></div></div>',
    restrict: 'E',
    link:function($scope,elm,attr) {

       $scope.increment = function(index_of_counter_array){
       $scope.counters[index_of_counter_array].initial_count ++ ;
       }

      $scope.decrement = function(index_of_counter_array){
        $scope.counters[index_of_counter_array].initial_count -- ;
      }

    }
  };
});

