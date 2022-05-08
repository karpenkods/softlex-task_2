import CompanySelect from '../Components/CompanySelect/CompanySelect'

const scrollOption = { x: true }
const columns = [
  {
    title: '№',
    dataIndex: 'key',
  },
  {
    title: 'Пункт погрузки',
    dataIndex: ['startPoint', 'location'],
    render: (company, record) => {
      return (
        <CompanySelect
          company={company}
          point={'startPoint'}
          application={record}
        />
      )
    },
  },
  {
    title: 'Пункт разгрузки',
    dataIndex: ['endPoint', 'location'],
    render: (company, record) => {
      return (
        <CompanySelect
          company={company}
          point={'endPoint'}
          application={record}
        />
      )
    },
  },
]

export { scrollOption, columns }
