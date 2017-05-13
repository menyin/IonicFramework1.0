/**
 * Created by CNY on 2017/4/11.
 */
angular.module('tabs.home.controller', [])
  .controller('tabs.home.index', ['$scope','$window', function($scope,$window) {
    /***
     * 模拟数据
     * @type {*[]}
     */
    $scope.adList=[
      {src:'img/tabs.home/home-ad-1.jpg',alt:'商品1'},
      {src:'img/tabs.home/home-ad-4.jpg',alt:'商品2'},
      {src:'img/tabs.home/home-ad-3.jpg',alt:'商品3'},
      {src:'img/tabs.home/home-ad-6.jpg',alt:'商品4'}
    ];



   /* $scope.$on('$ionicView.afterEnter', function (e) {
      alert('只有在route.js中的路由里视图对应的控制器加上才能触发该事件');
    });*/

    /***
     * 控制器对应视图渲染完事件
     */
    $scope.$watch('$viewContentLoaded', function (e) {
      initHeaderBanner();
      initHeadSarchBg();
      initGoToTop();
    });

    /***
     * 初始化主轮播图
     */
    function initHeaderBanner() {
      var headerSwiper = new Swiper('.swiper-container', {
        paginationClickable: true,//分页器可以被点击
        autoplay: 2000,//轮播时间间隔
        autoplayDisableOnInteraction: false,//
        loop: true,//轮播是否循环
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,//observer和observeParents都为true时，则当动态为weiper实例里添加图片时候，则当前swiper实例会重新实例化。一般都加上
        observeParents:true
      });
    }

    /***
     * 头部搜索栏滚动变色效果
     */
    function initHeadSarchBg() {
      var iWindowH = window.screen.height;
      var iLimitH = iWindowH / 2;
      var oHomeConten = document.getElementById('home-content');
      var oHeaderBagBg = document.getElementById('headerBar-bg');
      oHomeConten.addEventListener('scroll',function(e){
        if (this.scrollTop/iLimitH<0.8) {
          oHeaderBagBg.style.opacity = this.scrollTop / iLimitH;
        }
      },false);
    }

    /***
     * 回到顶部效果
     */
    function initGoToTop() {
      var iWindowH = window.screen.height;
      var iLimitH = iWindowH / 2;
      var oHomeConten = $window.document.getElementById('home-content');
      var oBackTop = document.getElementById('tabs-home-back-top');
      oHomeConten.addEventListener('scroll', function () {
        if (this.scrollTop>iLimitH) {
          oBackTop.style.opacity = 1;
        }else {
          oBackTop.style.opacity = 0;
        }
      },false);
      oBackTop.onclick= function () {
        oHomeConten.scrollTop=0;
      };
    }



  }]);



