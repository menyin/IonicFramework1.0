/**
 * Created by CNY on 2017/4/7.
 */


angular.module('route',
  [
    'test.controller',
    'guide.controller',
    'tabs.home.controller',
    'tabs.category.controller'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive

      .state('tabs', {//当用服务进行跳转时可以用这个名称作为跳转目标页面的标识
        url: '/tabs',
        abstract: true,
        templateUrl: 'views/tabs.html'
      })
      /*主页*/
      .state('tabs.home', {
        url: '/home',
        views: {
          'tabs.home': {
            templateUrl: 'views/tabs.home.html'
          }
        }
      })
      /*分类页*/
      .state('tabs.category', {
        url: '/category',
        views: {
          'tabs.category': {
            templateUrl: 'views/tabs.category.html'
          }
        }
      })
      /*购物车页*/
      .state('tabs.cart', {
        url: '/cart',
        views: {
          'tabs.cart': {
            templateUrl: 'views/tabs.cart.html',
            controller: 'tabs.cart.index'
          }
        }
      })
      /*账户页*/
      .state('tabs.account', {
        url: '/account',
        views: {
          'tabs.account': {
            templateUrl: 'views/tabs.account.html',
            controller: 'tabs.account.index'
          }
        }
      })
      /*测试页*/
      .state('tabs.test2', {
        url: '/test2',
        views: {
          'tabs.test2': {
            templateUrl: 'templates/tab-test2.html'
          }
        }
      })
      /*测试页面test*/
      .state('test', {
        url: '/test',
        templateUrl: 'views/test.html'
        /*controller: 'test.get'*/
      })
      /*引导页*/
      .state('guide', {
        url: '/guide',
        templateUrl: 'views/guide.html',
        controller: 'guide.page'
      })
      /*商品列表页*/
      .state('goodslist', {
        url: '/goodslist/:typeId',
        templateUrl: 'views/goodslist.html'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/guide');

  });
