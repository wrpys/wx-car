const { cars } = require('../../utils/mock')

const ADVANTAGE = ['一手车', '无重大事故', '无泡水', '无事故', '准新', '4S店保养', '可上绿牌', '低油耗']

Page({
  data: {
    keyword: '',
    count: 0,
    list: []
  },

  onLoad(options) {
    const keyword = decodeURIComponent(options.keyword || '')
    const kw = keyword.toLowerCase()
    const matched = cars.filter(c =>
      c.title.toLowerCase().includes(kw) ||
      c.brand.toLowerCase().includes(kw) ||
      c.tags.some(t => t.toLowerCase().includes(kw))
    )
    const list = matched.map(c => ({
      ...c,
      tagList: c.tags.map(t => ({ text: t, cls: ADVANTAGE.includes(t) ? 'tag-green' : '' }))
    }))
    wx.setNavigationBarTitle({ title: keyword || '搜索结果' })
    this.setData({ keyword, list, count: list.length })
  },

  onCarTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  onClear() {
    wx.navigateBack()
  }
})
