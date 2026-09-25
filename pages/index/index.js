const { mockCars } = require('../../utils/mock')

Page({
  data: {
    city: '福州市',
    cars: [],
    searchKeyword: ''
  },

  onLoad() {
    this.setData({ cars: mockCars })
  },

  onCityChange() {
    wx.showToast({ title: '切换城市', icon: 'none' })
  },

  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value })
  },

  onSearch() {
    const keyword = this.data.searchKeyword.trim()
    if (keyword) {
      wx.navigateTo({
        url: `/pages/search-result/search-result?keyword=${encodeURIComponent(keyword)}`
      })
    } else {
      wx.navigateTo({ url: '/pages/search/search' })
    }
  },

  onCarTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  onPublish() {
    wx.navigateTo({ url: '/pages/publish/publish' })
  },

  onFilterTap(e) {
    const type = e.currentTarget.dataset.type
    wx.showToast({ title: `${type}筛选`, icon: 'none' })
  }
})