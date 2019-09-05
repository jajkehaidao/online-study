// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      "https://img-1300073303.cos.ap-chengdu.myqcloud.com/wx00/box6.jpg",
      "https://img-1300073303.cos.ap-chengdu.myqcloud.com/wx00/box7.jpg",
      "https://img-1300073303.cos.ap-chengdu.myqcloud.com/wx00/box9.jpg",
      "https://img-1300073303.cos.ap-chengdu.myqcloud.com/wx00/box10.jpg"],
    
     
     },
    

  previewImage: function (e) {
    let m=e.target.dataset.map;
    console.log(m);
    var imgUrls = this.data.imgUrls;
    wx.previewImage({
      current: imgUrls[m], // 当前显示图片的http链接
      urls: imgUrls// 需要预览的图片http链接列表
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})