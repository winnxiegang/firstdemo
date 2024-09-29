// pages/news/news.js
Page({
  clickLight(event){
    this.setData({
      infoIndex:event.currentTarget.dataset.index
    });
    wx.showToast({
      title: event.currentTarget.dataset.index,
    })
console.log(event.currentTarget.dataset.index);
  },
  changeName(){
    // 类似以flutter 的 setState； 但这个必须包裹修改的数据

    this.setData({    changeContant:"66616" })

  },
  tagTest: function(event){
   
    console.log( event.currentTarget.dataset.name);
  },
  btnTagHandle(e){
wx.showToast({
  title: e.target.dataset.data,
})
  },
  inputData(e){
    console.log(e.detail.value);
      },
  /**
   * 页面的初始数据 所有的数据都在这这里初始化
   */
  data: {
    randomNum:Math.random()*10,
    dataList:[ {image: '图片1', unique: 'unique_5'},
    {image: '图片2', unique: 'unique_5'}, {image: '图片3', unique: 'unique_5'}, {image: '图片4', unique: 'unique_5'},],
    infoIndex:0,
    changeContant:"我的修改的内容调试作用",
    username: 'admin',
    password: '123456',
    info:["周一","周一2","周一3","周4一","周一5","周一5","周一5",],
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    length:2
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
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})