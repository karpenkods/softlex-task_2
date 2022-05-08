const companies = {
  company_1: {
    key: 1,
    id: 'company_1',
    location: '«РЗЭ» | ул. Кржижановского, 179/5/94',
    coordinates: [47.226588, 39.8123],
  },
  company_2: {
    key: 2,
    id: 'company_2',
    location: '«Меринос» | ул. Доватора, 168',
    coordinates: [47.24063, 39.574211],
  },
  company_3: {
    key: 3,
    id: 'company_3',
    location: '«Роствертол» | ул. Новаторов, 5',
    coordinates: [47.251904, 39.727149],
  },
  company_4: {
    key: 4,
    id: 'company_4',
    location: '«Донской табак» | 1-я Луговая ул., 17',
    coordinates: [47.196613, 39.688234],
  },
  company_5: {
    key: 5,
    id: 'company_5',
    location: '«НПП КП Квант» | ул. Мильчакова, 7',
    coordinates: [47.216227, 39.626223],
  },
  company_6: {
    key: 6,
    id: 'company_6',
    location: '«Леотек» | Радиаторный пер., 9/1',
    coordinates: [47.272819, 39.692708],
  },
  company_7: {
    key: 7,
    id: 'company_7',
    location: '«Валерия» | ул. Рыльского, 2/2',
    coordinates: [47.239872, 39.780015],
  },
  company_8: {
    key: 8,
    id: 'company_8',
    location: '«Фитэко» | Совхозная ул., 2А',
    coordinates: [47.220517, 39.574292],
  },
  company_9: {
    key: 9,
    id: 'company_9',
    location: '«10-ГПЗ» | ул. Пескова, 1/1',
    coordinates: [47.198358, 39.612084],
  },
  company_10: {
    key: 10,
    id: 'company_10',
    location: '«Ростсельмаш» | ул. Менжинского, 2',
    coordinates: [47.254137, 39.762731],
  },
}

const companyOptions = Object.keys(companies).map((id) => ({
  ...companies[id],
}))

export { companies, companyOptions }
