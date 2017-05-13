/**
 * Created by CNY on 2017/4/7.
 */
angular.module('test.controller', ['test.service'])

  .controller('test.camera',['$scope','$cordovaCamera',function ($scope,$cordovaCamera) {
  /*  document.addEventListener("deviceready", function () {
    }, false);*/
    $scope.openCamera= function () {
      alert('开始拍照');
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };
  }]);
