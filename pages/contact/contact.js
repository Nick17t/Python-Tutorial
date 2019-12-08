
Page({


  data: {
    loadingHide: true,
    loadingText: "拼命加载中..."
  },
  callmeTap: function () {
    wx.makePhoneCall({
      phoneNumber: '19121706007'
    })
  },

  onLoad: function (options) {
    var that = this;
    that.setData({ loadingHide: false });
    setTimeout(function () {
      that.setData({ loadingHide: true });
    }, 1000)
  }
})