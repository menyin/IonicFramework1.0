/**
 * Created by CNY on 2017/4/7.
 */
angular.module('test.service',[])
  .factory('_testFact',function () {
    return {
      getData: function () {
        return '33333333333333333333333333333333'
      }
    };
  });
