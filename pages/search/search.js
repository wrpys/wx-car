const { mockSearchHistory } = require('../../utils/mock')

Page({
  data: {
    keyword: '',
    history: []
  },

  onLoad() {
    this.setData({ history: mockSearchHistory })
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value })
  },

  onSearch() {
    const keyword = this.data.keyword.trim()
    if (keyword) {
      wx.navigateTo({
        url: `/pages/search-result/search-result?keyword=${encodeURIComponent(keyword)}`
      })
    }
  },

  onHistoryTap(e) {
    const keyword = e.currentTarget.dataset.keyword
    wx.navigateTo({
      url: `/pages/search-result/search-result?keyword=${encodeURIComponent(keyword)}`
    })
  },

  onClearHistory() {
    wx.showModal({
      title: '确认',
      content: '清空历史记录？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ history: [] })
        }
      }
    })
  }
})