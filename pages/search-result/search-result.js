const { mockCars } = require('../../utils/mock')

Page({
  data: {
    keyword: '',
    results: []
  },

  onLoad(options) {
    const keyword = decodeURIComponent(options.keyword || '')
    this.setData({ keyword })
    this.searchCars(keyword)
  },

  searchCars(keyword) {
    const results = mockCars.filter(car => 
      car.title.toLowerCase().includes(keyword.toLowerCase())
    )
    this.setData({ results })
  },

  onCarTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  }
})