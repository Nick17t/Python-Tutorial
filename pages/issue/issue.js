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
  },

  // formSubmit: function (e) {
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
  //   this.setData({
  //     allValue: e.detail.value
  //   })
  // },

  formSubmit: function(e) {
    var _this = this;
    wx.request({
      url: 'http://localhost:8080/thelostfound_war_exploded/issue',
      method: 'POST',
      data: {
        issueType: e.detail.value.issueType,
        title: e.detail.value.title,
        position: e.detail.value.position,
        text: e.detail.value.text,
        sno: getApp().globalData.sno
      },
      header: {
        //'content-type': 'application/json' // 默认值
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        _this.setData({
          title: "",
          position: "",
          text: "",
          currentWordNumber: 0
        });
      },
      fail: function(res) {
        console.log("上传失败");
      }
    })
  },

  checkimg: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        upload(that, tempFilePaths);
      }
    })
  },
})

function upload(page, path) {
  wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
    wx.uploadFile({
      url: constant.SERVER_URL + "/FileUploadServlet",
      filePath: path[0],
      name: 'file',
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function(res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({ //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function(e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function() {
        wx.hideToast(); //隐藏Toast
      }
    })
}