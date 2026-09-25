const { publishOptions } = require('../../utils/mock')

Page({
  data: {
    options: publishOptions,
    form: {
      title: '',
      brandIndex: null,
      year: '',
      mileage: '',
      fuelIndex: null,
      cityIndex: null,
      price: '',
      desc: ''
    },
    images: []
  },

  onField(e) {
    const field = e.currentTarget.dataset.field
    this.setData({ [`form.${field}`]: e.detail.value })
  },

  onPicker(e) {
    const field = e.currentTarget.dataset.field
    const index = e.detail.value
    this.setData({ [`form.${field}`]: index })
  },

  onAddImage() {
    const count = 6 - this.data.images.length
    if (count <= 0) return
    wx.chooseMedia({
      count,
      mediaType: ['image'],
      success: (res) => {
        const urls = res.tempFiles.map(f => f.tempFilePath)
        this.setData({ images: this.data.images.concat(urls) })
      }
    })
  },

  onRemove(e) {
    const idx = e.currentTarget.dataset.index
    const images = this.data.images.slice()
    images.splice(idx, 1)
    this.setData({ images })
  },

  onSubmit() {
    const f = this.data.form
    if (!f.title.trim()) return wx.showToast({ title: '请填写车辆标题', icon: 'none' })
    if (f.brandIndex === null) return wx.showToast({ title: '请选择品牌', icon: 'none' })
    if (!f.price) return wx.showToast({ title: '请填写期望售价', icon: 'none' })
    wx.showToast({ title: '发布成功，审核中', icon: 'success' })
  }
})
