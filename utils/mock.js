const mockCars = [
  {
    id: 5291,
    title: '丰田汉兰达2012款 2.7L 两驱5座精英版',
    year: '2012',
    mileage: '15.63万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车'],
    price: '3.85',
    isUrgent: true,
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 5290,
    title: '英菲尼迪QX50 2018款 2.0T 四驱豪华版',
    year: '2019',
    mileage: '9.1万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车', '一手车'],
    price: '9.88',
    isUrgent: false,
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 5289,
    title: '沃尔沃S90 2020款 改款 T5 智逸豪华版',
    year: '2020',
    mileage: '11.16万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车', '一手车'],
    price: '11.30',
    isUrgent: false,
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 5288,
    title: '宝马X1 2016款 sDrive20Li 豪华型',
    year: '2017',
    mileage: '15.24万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车'],
    price: '6.58',
    isUrgent: false,
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 5287,
    title: '福特福克斯2017款 三厢 1.6L 自动舒适型',
    year: '2016',
    mileage: '19.97万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车'],
    price: '1.96',
    isUrgent: false,
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 5286,
    title: '2013款 驭胜S350 2.4T 两驱自动柴油豪华型',
    year: '2014',
    mileage: '20.5万公里',
    city: '福州',
    fuel: '汽油',
    tags: ['代步车'],
    price: '2.88',
    isUrgent: false,
    image: 'https://picsum.photos/400/300?random=6'
  }
]

const mockCarDetail = {
  id: 4166,
  title: '奥迪Q3 2013款 35 TFSI quattro 技术型',
  year: '2014',
  month: '07',
  mileage: '10.85万公里',
  city: '福州',
  color: '橙色',
  displacement: '2.0T',
  transmission: '7挡湿式双离合',
  emissionStandard: '国IV(国V)',
  manufacturer: '国产',
  vehicleType: 'SUV',
  energyType: '汽油',
  fuel: '汽油',
  tags: ['出险记录', '代步车'],
  price: '4.56',
  publishTime: '2026-04-26 17:53:05',
  images: [
    'https://picsum.photos/800/600?random=10',
    'https://picsum.photos/800/600?random=11',
    'https://picsum.photos/800/600?random=12',
    'https://picsum.photos/800/600?random=13',
    'https://picsum.photos/800/600?random=14',
    'https://picsum.photos/800/600?random=15',
    'https://picsum.photos/800/600?random=16'
  ]
}

const mockSearchHistory = [
  '奥迪Q3 2013款 35 TFSI quattro 技术型',
  '奥迪A4L 2013款 30 TFSI 自动舒适型',
  '奥迪Q3 2017款 35 TFSI 时尚型',
  '奥迪A6L 2011款 2.0 TFSI 自动标准型',
  '奥迪Q3 2015款 35 TFSI quattro 技术型',
  '奥迪A4L 2018款 30周年年型 40 TFSI 时尚型',
  '奥迪A4L 2016款 35 TFSI 典藏版 S line舒适型',
  '奥迪A4L 2013款 35 TFSI 自动标准型',
  '奥迪Q2L 2018款 35 TFSI 时尚致雅型 国VI',
  '奥迪Q5 2013款 40 TFSI 技术型'
]

module.exports = {
  mockCars,
  mockCarDetail,
  mockSearchHistory
}