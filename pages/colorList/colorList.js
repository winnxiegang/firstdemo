// pages/colorList/colorList.js
Page({
  //跳转到详情界面
  clickDetail() {
    wx.navigateTo({
      url: '/pages/colorDetail/colorDetail',

    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    colorList: []
  },
  getColor() {
    wx.showLoading({
      title: '请求中',
    })
    wx.request({
      url: 'https://api.jiameng.com/api/v1/service/appTopic/get_rand_list',
      method: "get",
      success: ({
        data: res
      }) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.result]
        });

      },
      complete: () => {
        setTimeout(() => {
          wx.hideLoading()
        }, 1000);

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(() => {
      this.getColor()
      wx.stopPullDownRefresh();
    }, 2000);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getColor()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})