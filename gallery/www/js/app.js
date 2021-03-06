// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('GalleryCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

    $scope.allImages = [{
      src: 'img/pic1.jpg'
    }, {
      src: 'img/pic2.jpg'
    }, {
      src: 'img/pic3.jpg'
    }, {
      src: 'img/pic4.jpg'
    }, {
      src: 'img/pic5.jpg'
    }];

    $scope.zoomMin = 1;

    $scope.showImages  = function(index) {
      $scope.activeSlide = index;
      $scope.showModal('templates/gallery-zoomview.html');
    };

    $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    };

    $scope.classModal = function() {
      $scope.modal.hide();
      $scope.modal.remove();
    };

    $scope.updateSlideStatus = function(slide) {
      var zoomFactor = $ionicScrollDeligate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;

      if (zoomFactor == $scope.zoomMin) {
        $ionicSlideBoxDelegate.enableSlide(true);
      } else {
        $ionicSlideBoxDelegate.enableSlide(false);
      }
    };

});
