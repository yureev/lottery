'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  // event.type должен быть keypress
  $scope.getChar = function (event, flag) {
    // console.log(event)
    if (flag == 'letters') {
      if (event.which == null) { // IE
        if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode==45) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)) return ; // буквы
        return event.preventDefault()
      }
      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if ((event.which > 64 && event.which < 91) || (event.which > 96 && event.which < 123) || (event.which==45)) return ; // буквы
        return event.preventDefault();
      } else if ((event.which==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)){return;}
      return event.preventDefault(); // буквы

    } else if (flag == 'number'){
      if (event.which == null) { // IE
        if ((event.keyCode>47 && event.keyCode<58) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)) return; // цифры
        return event.preventDefault()
      }
      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which > 47 && event.which < 58) return; // цифры
        return event.preventDefault();
      } else if ((event.which==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)){return;}
      return event.preventDefault(); // цифры

    } else if (flag == 'street'){
      if (event.which == null) { // IE
        if ((event.keyCode >=1040 && event.keyCode <= 1103) ) return event.preventDefault(); // цифры, буквы, пробел, слэш, дефис
        return;
      }
      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which >= 1040 && event.which <= 1103 ) return event.preventDefault(); // цифры, буквы, пробел, слэш, дефис
        return;
      } else if ((event.which==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)){return;}
      return event.preventDefault(); // цифры, буквы, пробел, слэш, дефис
    }
  };


}]);