Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSize: 0, // 当前点击
    indicatorDots: false, // 是否显示面板指示点
    autoplay: false, // 是否自动切换
    duration: 0, // 滑动动画时长
    detail: [{
        "children": [{
          "id": "14",
          "name": "办公",
        }, {
          "id": "13",
          "name": "形象与礼仪",
        }],
        "id": "1",
        "name": "通用课程",
      },
      {
        "children": [{
          "id": "24",
          "name": "营销类",
        }, {
          "id": "23",
          "name": "行政类",
        }, {
          "id": "22",
          "name": "财务类",
        }, {
          "id": "21",
          "name": "人力资源类",
        }],
        "id": "2",
        "name": "专业知识",
      },
      {
        "children": [{
          "id": "33",
          "name": "领导力",
        }, {
          "id": "32",
          "name": "基层管理",
        }, {
          "id": "31",
          "name": "GSP管理",
        }],
        "id": "3",
        "name": "管理课程",
      },
      {
        "children": [{
          "id": "44",
          "name": "营销类",
        }, {
          "id": "43",
          "name": "行政类",
        }, {
          "id": "42",
          "name": "财务类",
        }, {
          "id": "41",
          "name": "人力资源类22222222222222222222227",
        }],
        "id": "4",
        "name": "制度政策",
      },
    ] // 分类集合
  },

  /**
   * 一级分类选择
   */
  chooseTypes: function (e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },

  /**
   * 二级分类选择
   */
  chooseSecondMenu: function (e) {
    let cId = e.target.dataset.cid;
    let cName = e.target.dataset.cname;
    wx.showModal({
      title: '提示',
      content: '点击选择了：' + cId + '-' + cName,
      showCancel: false,
      success(res) {}
    })
  }

})