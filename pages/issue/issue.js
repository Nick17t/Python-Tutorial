// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxNumber: 500, //可输入最大字数
    currentWordNumber: 0, //已输入字数

    selectorItems: ['QQ', '微信', '手机', '邮箱', '不留联系方式'],
    pickerIndex: 0
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

  getValueLength: function(e) { //监听输入，实时改变已输入字数
    let value = e.detail.value; //获取textarea的内容，
    let len = parseInt(value.length); //获取textarea的内容长度
    this.setData({
      currentWordNumber: len
    })
  },

  selectorChange: function(e) {
    var that = this
    let index = e.currentTarget.dataset.value
    that.setData({ //点击后更新数据
      [index]: e.detail.value
    });
  }
})