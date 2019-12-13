// pages/myIssue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{
      name: '全部',
      index: 0
    }, {
      name: '失物招领',
      index: 1
    }, {
      name: '寻物启事',
      index: 2
    }],
    allList:[
      {
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "捡到物品",
        "photos": "../../image/testinfo/testphoto/found-2.jpg",
        "title": "捡到校园卡",
        "text": "在信息楼313捡到学号171003530112的校园卡，放在讲台上",
        "position": "信息楼313",
        "issuedate": "2019-12-02"
      },
      {
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "丢失物品",
        "photos": "../../image/testinfo/testphoto/nophoto.png",
        "title": "丢失校园卡",
        "text": "在操场丢失学号171003530214的校园卡，捡到请联系",
        "position": "操场",
        "issuedate": "2019-11-30"
      }
    ],
    foundList:[
      {
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "捡到物品",
        "photos": "../../image/testinfo/testphoto/found-2.jpg",
        "title": "捡到校园卡",
        "text": "在信息楼313捡到学号171003530112的校园卡，放在讲台上",
        "position": "信息楼313",
        "issuedate": "2019-12-02"
      }
    ],
    lostList:[
      {
        "useravatar": "../../image/testinfo/testavatar/2.jpg",
        "username": "zs",
        "issueType": "丢失物品",
        "photos": "../../image/testinfo/testphoto/nophoto.png",
        "title": "丢失校园卡",
        "text": "在操场丢失学号171003530214的校园卡，捡到请联系",
        "position": "操场",
        "issuedate": "2019-11-30"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getDeviceInfo()
    this.orderShow()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  getDeviceInfo: function() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },


  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function(e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function(e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },

  // orderShow: function() {
  //   let that = this
  //   switch (this.data.currtab) {
  //     case 0:
  //       that.alreadyShow()
  //       break
  //     case 1:
  //       that.waitPayShow()
  //       break
  //     case 2:
  //       that.lostShow()
  //       break
  //   }
  // }
  // alreadyShow: function() {
  //   this.setData({
  //     alreadyOrder: [{
  //       name: "跃动体育运动俱乐部(圆明园店)",
  //       state: "交易成功",
  //       time: "2018-09-30 14:00-16:00",
  //       status: "已结束",
  //       url: "../../images/bad0.png",
  //       money: "132"
  //     }, {
  //       name: "跃动体育运动俱乐部(圆明园店)",
  //       state: "交易成功",
  //       time: "2018-10-12 18:00-20:00",
  //       status: "未开始",
  //       url: "../../images/bad3.jpg",
  //       money: "205"
  //     }]
  //   })
  // },

  // waitPayShow: function() {
  //   this.setData({
  //     waitPayOrder: [{
  //       name: "跃动体育运动俱乐部(圆明园店)",
  //       state: "待付款",
  //       time: "2018-10-14 14:00-16:00",
  //       status: "未开始",
  //       url: "../../images/bad1.jpg",
  //       money: "186"
  //     }],
  //   })
  // },

  // lostShow: function() {
  //   this.setData({
  //     lostOrder: [{
  //       name: "跃动体育运动俱乐部(圆明园店)",
  //       state: "已取消",
  //       time: "2018-10-4 10:00-12:00",
  //       status: "未开始",
  //       url: "../../images/bad1.jpg",
  //       money: "122"
  //     }],
  //   })
  // }
})