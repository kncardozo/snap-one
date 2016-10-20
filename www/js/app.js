var app = angular.module('starter', ['ionic', 'ngCordova']);
var db = new PouchDB('videos');

app.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom')
});

app.controller('DbController', function($scope){
  $scope.saveVideo = function (video) {
    db.put()
  }
});

app.controller('CameraCtrl', function($scope, $cordovaCapture) {
  $scope.captureVideo = function(){
    var options = { limit: 1, duration: 1 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  };
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    l
  });
});
