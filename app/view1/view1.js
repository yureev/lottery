'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {

  // event.type должен быть keypress
  $scope.getChar = function (event, flag) {
    // console.log(event);
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

    } else if (flag == 'date'){
      if (event.which == null) { // IE
        if ((event.keyCode>47 && event.keyCode<58) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)  || (event.keyCode==110) || (event.keyCode==190)) return; // цифры
        return event.preventDefault()
      }
      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if ((event.which > 47 && event.which < 58) || (event.keyCode==46)) return; // цифры
        return event.preventDefault();
      } else if ((event.which==8) || (event.keyCode==9) || (event.keyCode==46) || (event.keyCode==37) || (event.keyCode==39)){return;}
      return event.preventDefault(); // цифры и точка

    }
  };

    $rootScope.regFormInfo = {};
    $scope.validName = function() {
        $scope.nameRequired = '';

        if (!$scope.regFormInfo.name) {
            $scope.nameRequired = 'Name Required';
        }
    };
    $scope.validSurname = function() {
        $scope.surnameRequired = '';

        if (!$scope.regFormInfo.surname) {
            $scope.surnameRequired = 'Surname Required';
        }
    };
    $scope.validEmail = function() {
        $scope.emailRequired = '';

        if (!$scope.regFormInfo.mail) {
            $scope.emailRequired = 'Mail Required';
        }
    };
    // $scope.validPhone = function() {
    //     $scope.phoneRequired = '';
    //
    //     if (!$scope.regFormInfo.phone) {
    //         $scope.phoneRequired = 'Phone Required';
    //     }
    // };
    $scope.participants = [];

    $scope.addParticipant = function() {
      $scope.participants.push($scope.regFormInfo) ;
      $scope.regFormInfo = {};
      $scope.regForm.$setPristine();
      $scope.regForm.$setUntouched();
    };


    $scope.editParticipant = function() {
      $scope.edit = !$scope.edit;


    };

    $scope.win = function() {
      $scope.min = 0;
      $scope.max = $scope.participants.length - 1;
      $scope.rand = Math.floor(Math.random() * ($scope.max - $scope.min + 1)) + $scope.min;
      $scope.winnerName = $scope.participants[$scope.rand].name;
      $scope.winnerSurname = $scope.participants[$scope.rand].surname;
      $scope.winnerId = $scope.rand + 1;
    };


}]);