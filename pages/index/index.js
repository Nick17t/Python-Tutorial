//index.js

var WxSearch = require('../../wxSearchView/wxSearchView.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        "id":"0",
        "useravatar": "../../image/testinfo/testavatar/1.jpg",
        "username": "zcz",
        "issueType": "丢失物品",
        "photos": "../../image/testinfo/testphoto/lost-1.jpg",
        "title": "丢失钥匙一串",
        "text": "在一食堂附近丢失一串如图所示的钥匙，请捡到的同学联系我",
        "position": "一食堂",
        "issuedate": "2019-12-03",
        "detailurl":"../detail/detail?id=0"
      },
      {
        "id": "1",
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "捡到物品",
        "photos": "../../image/testinfo/testphoto/found-2.jpg",
        "title": "捡到校园卡",
        "text": "在信息楼313捡到学号171003530112的校园卡，放在讲台上",
        "position": "信息楼313",
        "issuedate": "2019-12-02",
        "detailurl": "../detail/detail?id=1"
      },
      {
        "id": "2",
        "useravatar": "../../image/testinfo/testavatar/3.jpg",
        "username": "zzc",
        "issueType": "捡到物品",
        "photos": "../../image/testinfo/testphoto/found-1.jpg",
        "title": "捡到U盘",
        "text": "在25宿1楼捡到1个U盘，放在门口桌子上了",
        "position": "25-26宿",
        "issuedate": "2019-12-01",
        "detailurl": "../detail/detail?id=2"
      },
      {
        "id": "3",
        "useravatar": "../../image/testinfo/testavatar/4.jpg",
        "username": "sz",
        "issueType": "丢失物品",
        "photos": "../../image/testinfo/testphoto/lost-2.jpg",
        "title": "丢了一本书",
        "text": "丢了一本《C++ Primier》，可能是在A教",
        "position": "A教或其他地方",
        "issuedate": "2019-11-30",
        "detailurl": "../detail/detail?id=3"
      },
      {
        "id": "4",
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "丢失物品",
        "photos": "../../image/testinfo/testphoto/nophoto.png",
        "title": "丢失校园卡",
        "text": "在操场丢失学号171003530214的校园卡，捡到请联系",
        "position": "操场",
        "issuedate": "2019-11-30",
        "detailurl": "../detail/detail?id=4"
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });

    var that = this;
    WxSearch.init(
      that, // 本页面一个引用
      ['杭州', '嘉兴', "海宁", "桐乡", '宁波', '金华'], // 热点搜索推荐，[]表示不使用
      ['湖北', '湖南', '北京', "南京"], // 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
  },
  wxSearchInput: WxSearch.wxSearchInput, // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap, // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm, // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear, // 清空函数

  mySearchFunction: function(value) {
    // do your job here
    // 示例：跳转
    wx.redirectTo({
      url: '../index/index?searchValue=' + value
    })
  },

  // 5 返回回调函数
  myGobackFunction: function() {
    // do your job here
    // 示例：返回
    wx.redirectTo({
      url: '../index/index?searchValue=返回'
    })
  }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})