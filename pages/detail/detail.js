const { carDetails, defaultCarDetail } = require('../../utils/mock')

const ADVANTAGE = ['一手车', '无重大事故', '无泡水', '无事故', '准新', '4S店保养', '可上绿牌', '低油耗']

Page({
  data: {
    car: null,
    current: 0,
    total: 0,
    collected: false
  },

  onLoad(options) {
    const id = options.id
    const base = (id && carDetails[id]) ? carDetails[id] : defaultCarDetail
    const car = {
      ...base,
      tagList: base.tags.map(t => ({ text: t, cls: ADVANTAGE.includes(t) ? 'tag-green' : '' }))
    }
    this.setData({ car, total: car.images.length })
  },

  onImageChange(e) {
    this.setData({ current: e.detail.current })
  },

  onDownload() {
    wx.showToast({ title: '图片保存中…', icon: 'none' })
  },

  onCollect() {
    this.setData({ collected: !this.data.collected })
  },

  onShare() {
    wx.showToast({ title: '请点击右上角分享', icon: 'none' })
  },

  onCall() {
    wx.showModal({
      title: '拨打电话',
      content: this.data.car.seller.phone,
      confirmText: '呼叫',
      success: (r) => { if (r.confirm) wx.showToast({ title: '正在呼叫…', icon: 'none' }) }
    })
  }
})
