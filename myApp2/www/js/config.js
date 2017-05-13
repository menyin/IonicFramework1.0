/**
 * Created by CNY on 2017/4/7.
 */
/*ionic UI配置（兼容配置）*/
angular.module('config',[])
  .config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');//还有其它一些配置到网上查找

    $ionicConfigProvider.platform.android.tabs.position("buttom");
    $ionicConfigProvider.platform.ios.tabs.position("buttom");

    //$ionicConfigProvider.platform.ios.tabs.style('standard');
    //$ionicConfigProvider.platform.ios.tabs.position('bottom');
    //$ionicConfigProvider.platform.android.tabs.style('standard');
    //$ionicConfigProvider.platform.android.tabs.position('bottom');
    //
    //$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    //$ionicConfigProvider.platform.android.navBar.alignTitle('center');
    //
    //$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    //$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    //
    //$ionicConfigProvider.platform.ios.views.transition('ios');
    //$ionicConfigProvider.platform.android.views.transition('android');
  }]);
