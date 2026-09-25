const { searchHistory, hotSearches } = require('../../utils/mock')

Page({
  data: {
    keyword: '',
    history: searchHistory,
    hot: hotSearches
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value })
  },

  goResult(word) {
    const kw = (word || this.data.keyword).trim()
    if (!kw) {
      wx.showToast({ title: '请输入关键词', icon: 'none' })
      return
    }
    wx.navigateTo({ url: `/pages/search-result/search-result?keyword=${encodeURIComponent(kw)}` })
  },

  onSearch() {
    this.goResult()
  },

  onChip(e) {
    const word = e.currentTarget.dataset.word
    this.setData({ keyword: word })
    this.goResult(word)
  },

  onClear() {
    wx.showModal({
      title: '提示',
      content: '确定清空搜索历史？',
      success: (r) => { if (r.confirm) this.setData({ history: [] }) }
    })
  }
})
