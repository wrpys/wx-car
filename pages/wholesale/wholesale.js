const { wholesaleCars } = require('../../utils/mock')

Page({
  data: {
    list: []
  },

  onLoad() {
    this.setData({ list: wholesaleCars })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },

  onItemTap(e) {
    wx.showToast({ title: '查看批发车源', icon: 'none' })
  }
})
