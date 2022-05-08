import { Form, Select } from 'antd'
import { companyOptions } from '../../lib/companiesList'
import 'antd/dist/antd.css'
import './CompanySelect.scss'

const { Option } = Select

const CompanySelect = ({ company, point, application }) => {
  const handleCaseSensitivity = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

  return (
    <Form.Item
      className="company__select"
      name={[String(application.key), point]}
      initialValue={company}
    >
      <Select
        bordered={false}
        showSearch
        showArrow={true}
        filterOption={handleCaseSensitivity}
      >
        {companyOptions.map(({ id, location }) => (
          <Option key={id} value={id}>
            {location}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default CompanySelect
