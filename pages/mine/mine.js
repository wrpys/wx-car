const { user, mineMenus } = require('../../utils/mock')

Page({
  data: {
    user,
    menus: mineMenus
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 })
    }
  },

  onMenuTap(e) {
    const name = e.currentTarget.dataset.name
    wx.showToast({ title: name, icon: 'none' })
  }
})
