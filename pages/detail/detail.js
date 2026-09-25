const { mockCarDetail } = require('../../utils/mock')

Page({
  data: {
    car: null,
    currentImage: 0,
    totalImages: 0
  },

  onLoad(options) {
    const id = options.id
    console.log('Car ID:', id)
    this.setData({
      car: mockCarDetail,
      totalImages: mockCarDetail.images.length
    })
  },

  onImageChange(e) {
    this.setData({ currentImage: e.detail.current })
  },

  onDownloadImages() {
    wx.showToast({ title: '下载图片功能开发中', icon: 'none' })
  },

  onMoreParams() {
    wx.showToast({ title: '查看更多参数', icon: 'none' })
  },

  onCall() {
    wx.makePhoneCall({ phoneNumber: '10086' })
  }
})