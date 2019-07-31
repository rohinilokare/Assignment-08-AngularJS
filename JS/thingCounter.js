var mainMod = angular.module('ThingCounterApp', []);

mainMod.service('CounterService',function(){    //reusable business logic independent of views
  this.addCounter = function($scope){
    var counter = {initial_count: 0,label:$scope.label,color:$scope.color}
  $scope.counters.push(counter)
  }
});

//The business logic behind views
mainMod.controller('counterController',function($scope,CounterService) {
  $scope.color = '#c9b5b5';
  $scope.label = 'default';

  $scope.submitForm = function()
  {
    CounterService.addCounter($scope)
    refreshForm();
     $scope.showform=false;
  }

  function refreshForm()
  {
    console.log('in refresh form')
    $scope.color = '#c9b5b5';
    $scope.label = 'default';
  }

  $scope.counters = [];
});

//Extend HTML with custom attribute & element
mainMod.directive('myCounter',function() {
  return {
    restrict: 'E',

    link:function($scope,elm,attr) {
      $scope.increment = function(index_of_counter_array){
        $scope.counters[index_of_counter_array].initial_count ++ ;
      }

      $scope.decrement = function(index_of_counter_array){
        $scope.counters[index_of_counter_array].initial_count -- ;
      }

      $scope.updateLabel = function(index_of_counter_array){
        $scope.counters[index_of_counter_array].label=$scope.label
      }
      $scope.invalidObject ={
      "color":"red"
      }

    }
  };
});

