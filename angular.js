var mainMod = angular.module('ThingCounterApp', []);


mainMod.controller('myCtrl',function($scope) {
    $scope.showpage = true;
});


mainMod.controller('MainCtrl', function ($scope) {
    $scope.text = '';
});

mainMod.directive('myCustomer', function() {
  return {
    // template : '<h1>Hello</h1><table style="border:white 1px solid"><tr><td style="border-right:1px white solid">name</td><td>Roll No</td><td>std</td></tr></table>'
    template : '<h1>ActiveCounterList</h1><div class="button_group"><button style="border:white 1px solid">-</button><button>label</button><button>count</button><button>+</button></div>'
  };
});




function validate() {
  if( document.myForm.lable.value == "" ) {
     alert( "Please provide your lable!" );
     document.myForm.lable.focus() ;
     return false;
  }else{
    label = document.myForm.lable.value
    console.log(lable)
    document.getElementById("countername").innerHTML = "lable";
  }
  if( document.myForm.color.value == "" ) {
     alert( "Please provide your color!" );
     document.myForm.color.focus() ;
     return false;
  }
   return( true );
}
