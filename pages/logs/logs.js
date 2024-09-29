// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickNum:0
  },
  onClick(){
    this.setData({
      clickNum: this.data.clickNum+1
    })
  },
  onClickSet(){
   
    this.setData({
      clickNum:0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  
  onPullDownRefresh: function () {
    // 下拉刷新时的处理
    console.log('开始刷新');
    
    // 模拟异步请求数据
    setTimeout(() => {
      console.log('刷新完成');
      
      // 结束下拉刷新
      wx.stopPullDownRefresh();
      this.setData({
        clickNum:0
      })
    }, 2000);
  }
  ,

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      clickNum: this.data.clickNum+1
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})