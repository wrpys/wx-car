const { cars } = require('../../utils/mock')

const ADVANTAGE = ['一手车', '无重大事故', '无泡水', '无事故', '准新', '4S店保养', '可上绿牌', '低油耗']

Page({
  data: {
    city: '福州',
    keyword: '',
    filters: ['默认排序', '品牌', '价格', '筛选'],
    activeFilter: 0,
    list: []
  },

  onLoad() {
    this.setData({ list: this.decorate(cars) })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  decorate(arr) {
    return arr.map(c => ({
      ...c,
      tagList: c.tags.map(t => ({ text: t, cls: ADVANTAGE.includes(t) ? 'tag-green' : '' }))
    }))
  },

  onCityTap() {
    wx.showToast({ title: '切换城市', icon: 'none' })
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value })
  },

  onSearch() {
    const kw = this.data.keyword.trim()
    const url = kw
      ? `/pages/search-result/search-result?keyword=${encodeURIComponent(kw)}`
      : '/pages/search/search'
    wx.navigateTo({ url })
  },

  onFilterTap(e) {
    const idx = e.currentTarget.dataset.index
    this.setData({ activeFilter: idx })
    wx.showToast({ title: this.data.filters[idx], icon: 'none' })
  },

  onCarTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  onPublish() {
    wx.navigateTo({ url: '/pages/publish/publish' })
  }
})
