Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        key: 'home'
      },
      {
        pagePath: '/pages/wholesale/wholesale',
        text: '批发车',
        key: 'wholesale'
      },
      {
        pagePath: '/pages/service/service',
        text: '服务',
        key: 'service'
      },
      {
        pagePath: '/pages/mine/mine',
        text: '我的',
        key: 'mine'
      }
    ]
  },
  methods: {
    switchTab(e) {
      const idx = e.currentTarget.dataset.index
      const path = this.data.list[idx].pagePath
      wx.switchTab({ url: path })
    }
  }
})
