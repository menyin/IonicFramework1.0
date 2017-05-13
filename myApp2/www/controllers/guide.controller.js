/**
 * Created by CNY on 2017/4/8.
 */
angular.module('guide.controller', [])
  .controller('guide.page', function () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: false,
      // 如果需要分页器
      pagination: '.swiper-pagination'
    });
  })
  .controller('mmm',['$scope', function ($scope) {
    $scope.name='My name is nanyangchen.'
  }]);
