Page({

  data: {
    opacity: 1

  },
  onLoad: function (options) {


  },
  navigateTo1: function (e) {
    wx.navigateTo({
      url: '../annimation1/annimation1',
    })
   console.log(e.target.dataset.map)
  },
  navigateTo2: function (e) {
    wx.navigateTo({
      url: '../annimation2/annimation2',
    })
    console.log(e.target.dataset.map)
  },
  navigateTo3: function (e) {
    wx.navigateTo({
      url: '../annimation3/annimation3',
    })
    console.log(e.target.dataset.map)
  }
  
})