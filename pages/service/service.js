const { services } = require('../../utils/mock')

Page({
  data: {
    services: [],
    guarantees: [
      { icon: 'ic-check', text: '真实车源' },
      { icon: 'ic-check', text: '专业检测' },
      { icon: 'ic-check', text: '资金担保' },
      { icon: 'ic-check', text: '售后无忧' }
    ]
  },

  onLoad() {
    this.setData({ services })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },

  onServiceTap(e) {
    const name = e.currentTarget.dataset.name
    wx.showToast({ title: name, icon: 'none' })
  }
})
