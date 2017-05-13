/**
 * Created by CNY on 2017/4/11.
 */
angular.module('tabs.category.controller', [])
  .controller('tabs.category.index',['$scope',function ($scope) {
    /*$scope.$on('$viewContentLoader', function () {*/
      $scope.aCategory = getCategoryData();
      $scope.aCategoryDetails = getCategoryDetails(102);
    /*});*/

    $scope.categoryLeftClick = function (e) {
      var _this= e.target;
      _this.className='nav-current';
      $(_this).siblings().removeClass().addClass('nav-blur');
      console.log(e);
    };
    $scope.getCategoryDetailData = function (iType) {
      $scope.aCategoryDetails = getCategoryDetails(iType);
    };


    /***
     * 获取指定分类详细内容
     * @param iType
     * @returns {*[]}
     */
    function getCategoryDetails(iType) {
      if(iType==102){
       return [
          {
            name:"毛呢大衣",
            src:"img/tabs.category/nz1.jpg",
            typeNumber:'10001'
          },
          {
            name:"羽绒服",
            src:"img/tabs.category/nz2.jpg",
            typeNumber:'10002'
          },
          {
            name:"针织衫",
            src:"img/tabs.category/nz3.jpg",
            typeNumber:'10003'
          },
          {
            name:"连衣裙",
            src:"img/tabs.category/nz4.jpg",
            typeNumber:'10004'
          },
          {
            name:"棉服",
            src:"img/tabs.category/nz5.jpg",
            typeNumber:'10005'
          },
          {
            name:"长袖T恤",
            src:"img/tabs.category/nz6.jpg",
            typeNumber:'10006'
          },
          {
            name:"羊绒衫",
            src:"img/tabs.category/nz7.jpg",
            typeNumber:'10007'
          },
          {
            name:"衬衫",
            src:"img/tabs.category/nz8.jpg",
            typeNumber:'10008'
          },
          {
            name:"风衣",
            src:"img/tabs.category/nz9.jpg",
            typeNumber:'10009'
          },
          {
            name:"皮衣",
            src:"img/tabs.category/nz10.jpg",
            typeNumber:'10010'
          },
          {
            name:"休闲裤",
            src:"img/tabs.category/nz11.jpg",
            typeNumber:'10011'
          },
          {
            name:"牛仔裤",
            src:"img/tabs.category/nz12.jpg",
            typeNumber:'10012'
          }
        ];
      }
      else{
        return [
          {
            name:"夹克",
            src:"img/tabs.category/nanz1.jpg",
            typeNumber:'10013'
          },
          {
            name:"衬衫",
            src:"img/tabs.category/nanz2.jpg",
            typeNumber:'10014'
          },
          {
            name:"牛仔裤",
            src:"img/tabs.category/nanz3.jpg",
            typeNumber:'10015'
          },
          {
            name:"羽绒服",
            src:"img/tabs.category/nanz4.jpg",
            typeNumber:'10016'
          },

          {
            name:"T恤",
            src:"img/tabs.category/nanz5.jpg",
            typeNumber:'10017'
          },
          {
            name:"休闲裤",
            src:"img/tabs.category/nanz6.jpg",
            typeNumber:'10018'
          },
          {
            name:"卫衣",
            src:"img/tabs.category/nanz7.jpg",
            typeNumber:'10019'
          },
          {
            name:"针织衫",
            src:"img/tabs.category/nanz8.jpg",
            typeNumber:'10020'
          },
          {
            name:"棉服",
            src:"img/tabs.category/nanz9.jpg",
            typeNumber:'10021'
          }
        ];
      }
    }

    /***
     * 获取分类模拟数据
     * @returns {*[]}
     */
    function getCategoryData() {
      var aCategory = [
        {
          name:"潮流女装",
          typeNumber:'102'
        },
        {
          name:"品牌男装",
          typeNumber:'103'
        },
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"内衣配饰",
          typeNumber:'104'
        },
        {
          name:"家用电器",
          typeNumber:'105'
        },
        {
          name:"电脑办公",
          typeNumber:'106'
        },
        {
          name:"手机数码",
          typeNumber:'107'
        },
        {
          name:"母婴频道",
          typeNumber:'108'
        },
        {
          name:"图书",
          typeNumber:'109'
        },
        {
          name:"家居家纺",
          typeNumber:'110'
        },
        {
          name:"居家生活",
          typeNumber:'111'
        },
        {
          name:"家具建材",
          typeNumber:'112'
        },
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        }
      ];
      return aCategory ;
    }
  }] );


