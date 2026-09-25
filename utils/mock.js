// ============================================================
// 二手车买卖小程序 · 模拟数据（v2 重构版）
// 说明：全部为前端演示用 mock，图片使用 picsum 占位（开发时需勾选「不校验合法域名」）
// ============================================================

const img = (seed) => `https://picsum.photos/seed/${seed}/600/400`

// ---------- 车源列表（首页 / 搜索结果通用）----------
const cars = [
  {
    id: 'C20489',
    title: '丰田 汉兰达 2018款 2.0T 四驱豪华版 7座',
    brand: '丰田',
    year: 2018,
    mileage: 6.8,
    city: '福州',
    price: 13.8,
    originalPrice: 15.6,
    fuel: '汽油',
    tags: ['一手车', '无重大事故', '4S店保养'],
    cover: img('hanlanda'),
    urgent: true,
    isNew: false,
    certified: true,
    views: 326
  },
  {
    id: 'C20472',
    title: '本田 雅阁 2020款 锐·混动 2.0L 锐智版',
    brand: '本田',
    year: 2020,
    mileage: 4.2,
    city: '福州',
    price: 14.98,
    originalPrice: null,
    fuel: '混动',
    tags: ['一手车', '混动省油', '准新'],
    cover: img('accord'),
    urgent: false,
    isNew: true,
    certified: true,
    views: 198
  },
  {
    id: 'C20455',
    title: '大众 迈腾 2019款 330TSI 领先型',
    brand: '大众',
    year: 2019,
    mileage: 7.5,
    city: '厦门',
    price: 9.88,
    originalPrice: 11.2,
    fuel: '汽油',
    tags: ['无泡水', '真皮座椅'],
    cover: img('magotan'),
    urgent: false,
    isNew: false,
    certified: false,
    views: 254
  },
  {
    id: 'C20431',
    title: '特斯拉 Model 3 2021款 标准续航后驱版',
    brand: '特斯拉',
    year: 2021,
    mileage: 3.1,
    city: '福州',
    price: 16.5,
    originalPrice: null,
    fuel: '纯电',
    tags: ['一手车', '准新', '充电权益'],
    cover: img('model3'),
    urgent: true,
    isNew: true,
    certified: true,
    views: 412
  },
  {
    id: 'C20410',
    title: '日产 轩逸 2017款 1.6L 悦享版',
    brand: '日产',
    year: 2017,
    mileage: 9.6,
    city: '泉州',
    price: 5.68,
    originalPrice: 6.4,
    fuel: '汽油',
    tags: ['代步神器', '省油'],
    cover: img('sylphy'),
    urgent: false,
    isNew: false,
    certified: false,
    views: 167
  },
  {
    id: 'C20398',
    title: '宝马 X3 2020款 xDrive25i 豪华套装',
    brand: '宝马',
    year: 2020,
    mileage: 5.4,
    city: '福州',
    price: 23.8,
    originalPrice: 26.5,
    fuel: '汽油',
    tags: ['一手车', '全景天窗', '无事故'],
    cover: img('x3'),
    urgent: false,
    isNew: false,
    certified: true,
    views: 289
  },
  {
    id: 'C20377',
    title: '比亚迪 秦PLUS DM-i 2022款 55KM 尊贵型',
    brand: '比亚迪',
    year: 2022,
    mileage: 2.3,
    city: '福州',
    price: 8.98,
    originalPrice: null,
    fuel: '插电混动',
    tags: ['准新', '可上绿牌', '低油耗'],
    cover: img('qinplus'),
    urgent: false,
    isNew: true,
    certified: true,
    views: 356
  },
  {
    id: 'C20360',
    title: '奥迪 A4L 2019款 40 TFSI 时尚型',
    brand: '奥迪',
    year: 2019,
    mileage: 8.1,
    city: '厦门',
    price: 15.6,
    originalPrice: 17.8,
    fuel: '汽油',
    tags: ['一手车', '无重大事故'],
    cover: img('a4l'),
    urgent: false,
    isNew: false,
    certified: true,
    views: 233
  }
]

// ---------- 车辆详情（按 id 取，缺省回退到主详情）----------
const carDetails = {
  C20489: {
    id: 'C20489',
    title: '丰田 汉兰达 2018款 2.0T 四驱豪华版 7座',
    price: 13.8,
    originalPrice: 15.6,
    listedYear: 2018,
    listedMonth: 5,
    mileage: 6.8,
    city: '福州',
    color: '珍珠白',
    displacement: '2.0T',
    transmission: '6挡手自一体',
    emission: '国V',
    seats: '7座',
    drive: '前置四驱',
    structure: '5门7座SUV',
    fuel: '汽油',
    tags: ['一手车', '无重大事故', '4S店保养'],
    features: ['全景天窗', '真皮座椅', '倒车影像', '定速巡航', '无钥匙进入', '电动尾门'],
    images: [
      img('hanlanda-1'), img('hanlanda-2'), img('hanlanda-3'),
      img('hanlanda-4'), img('hanlanda-5'), img('hanlanda-6')
    ],
    seller: {
      name: '王女士',
      type: '个人',
      phone: '138****6688',
      location: '福州·仓山区',
      avatar: img('seller1')
    },
    report: { accident: false, water: false, fire: false, score: 92 },
    publishTime: '2026-09-20 14:32'
  },
  C20431: {
    id: 'C20431',
    title: '特斯拉 Model 3 2021款 标准续航后驱版',
    price: 16.5,
    originalPrice: null,
    listedYear: 2021,
    listedMonth: 3,
    mileage: 3.1,
    city: '福州',
    color: '星空灰',
    displacement: '纯电',
    transmission: '电动车单速变速箱',
    emission: '零排放',
    seats: '5座',
    drive: '后置后驱',
    structure: '4门5座三厢',
    fuel: '纯电',
    tags: ['一手车', '准新', '充电权益'],
    features: ['自动驾驶辅助', '全景玻璃车顶', '前排座椅加热', '哨兵模式', '手机钥匙'],
    images: [
      img('model3-1'), img('model3-2'), img('model3-3'),
      img('model3-4'), img('model3-5')
    ],
    seller: {
      name: '陈先生',
      type: '个人',
      phone: '139****2031',
      location: '福州·鼓楼区',
      avatar: img('seller2')
    },
    report: { accident: false, water: false, fire: false, score: 95 },
    publishTime: '2026-09-22 09:18'
  }
}

const defaultCarDetail = carDetails['C20489']

// ---------- 搜索 ----------
const searchHistory = [
  '汉兰达 四驱', 'Model 3', '10万以内 自动挡', '雅阁 混动',
  '宝马 X3', '秦PLUS DM-i', '轩逸', '7座 SUV'
]

const hotSearches = [
  { word: '汉兰达', heat: 9821 },
  { word: 'Model 3', heat: 8742 },
  { word: '雅阁混动', heat: 7654 },
  { word: '宝马X3', heat: 6510 },
  { word: '秦PLUS', heat: 5988 },
  { word: '轩逸', heat: 5321 },
  { word: '迈腾', heat: 4876 },
  { word: 'A4L', heat: 4210 }
]

// ---------- 批发车 ----------
const wholesaleCars = [
  {
    id: 'W8821', title: '大众 朗逸 2021款 1.5L 自动风尚版', year: 2021,
    mileage: 3.5, city: '福州', price: 7.2, stock: 12, minBatch: 2,
    cover: img('wh1'), tags: ['4S店直供', '低里程']
  },
  {
    id: 'W8820', title: '吉利 帝豪 2020款 1.5L CVT 豪华型', year: 2020,
    mileage: 4.8, city: '福州', price: 4.98, stock: 20, minBatch: 3,
    cover: img('wh2'), tags: ['整车批发', '可按揭']
  },
  {
    id: 'W8815', title: '长安 CS55 2022款 1.5T 自动豪华型', year: 2022,
    mileage: 2.1, city: '厦门', price: 6.6, stock: 8, minBatch: 1,
    cover: img('wh3'), tags: ['准新', 'SUV']
  },
  {
    id: 'W8809', title: '别克 英朗 2019款 15T 双离合进取型', year: 2019,
    mileage: 6.2, city: '泉州', price: 3.85, stock: 15, minBatch: 4,
    cover: img('wh4'), tags: ['低价走量', '代步']
  }
]

// ---------- 服务 ----------
const services = [
  { key: 'evaluate', name: '免费估价', desc: '30秒在线估值', color: '#FFB800' },
  { key: 'transfer', name: '过户代办', desc: '专人协助办理', color: '#3D7FFF' },
  { key: 'finance', name: '分期金融', desc: '低息0首付', color: '#2BA471' },
  { key: 'warranty', name: '延保质保', desc: '全国联保', color: '#FF7A29' },
  { key: 'inspect', name: '上门检测', desc: '专业评估师', color: '#9B5CFF' },
  { key: 'trade', name: '寄售服务', desc: '帮您卖高价', color: '#FF5C8A' }
]

// ---------- 我的 ----------
const user = {
  name: '林先生',
  phone: '138****8866',
  avatar: img('me-avatar'),
  level: 'V3 认证车主',
  stats: { publish: 3, favorite: 28, view: 156 }
}

const mineMenus = [
  { key: 'order', name: '我的订单', desc: '' },
  { key: 'favorite', name: '我的收藏', desc: '28 条' },
  { key: 'publish', name: '我发布的车', desc: '3 辆在售' },
  { key: 'evaluate', name: '我的估价', desc: '' },
  { key: 'service', name: '客服中心', desc: '' },
  { key: 'setting', name: '设置', desc: '' }
]

// ---------- 发布表单选项 ----------
const publishOptions = {
  brands: ['丰田', '本田', '大众', '宝马', '奥迪', '比亚迪', '特斯拉', '日产', '吉利', '长安'],
  fuelTypes: ['汽油', '混动', '插电混动', '纯电', '柴油'],
  citys: ['福州', '厦门', '泉州', '莆田', '漳州']
}

module.exports = {
  cars,
  carDetails,
  defaultCarDetail,
  searchHistory,
  hotSearches,
  wholesaleCars,
  services,
  user,
  mineMenus,
  publishOptions
}
