Page({

  data: {
    opacity: 1

  },
  onLoad: function (options) {
   

  },
  jump: function (e) {
    this.setData({
      opacity:1
    })
    console.log(e.target)
  },
  switchTab1: function () {

     
    wx.switchTab({
      url: '../page1/page1',
    })
    
  },
  navigateTo2: function () {


    wx.navigateTo({
      url: '../page2/page2',
    })

  },
  switchTab3: function () {


    wx.switchTab({
      url: '../page3/page3',
    })

  },
  navigateTo4: function () {


    wx.navigateTo({
      url: '../annimation1/annimation1',
    })

  },
  navigateTo5: function () {


    wx.navigateTo({
      url: '../annimation2/annimation2',
    })

  },
  navigateTo6: function () {


    wx.navigateTo({
      url: '../annimation3/annimation3',
    })

  }
})