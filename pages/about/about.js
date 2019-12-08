
Page({

  data: {
    loadingHide: true,
    loadingText: "快马加鞭加载中"
  },

  onLoad: function (options) {
    var that = this;
    that.setData({ loadingHide: false });
    setTimeout(function () {
      that.setData({ loadingHide: true });
    }, 1000)
  }
})