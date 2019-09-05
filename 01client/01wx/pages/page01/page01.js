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
  switchTab: function () {

     
     wx.switchTab({
      url: '../page03/page03',
    })
    
  }
})