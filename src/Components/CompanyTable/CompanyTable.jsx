import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Form } from 'antd'
import { selectRequestAction, changeRequestAction } from '../../Redux/reducer'
import { scrollOption, columns } from '../../lib/constantsTable'
import { companies } from '../../lib/companiesList'
import 'antd/dist/antd.css'
import './CompanyTable.scss'

const CompanyTable = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const requests = useSelector((state) => state.delivery.delivery)
  const selected = useSelector((state) => state.delivery.selected)

  const handleCompanyPoints = (values) => {
    const applicationId = Object.keys(values)[0]
    const changingPoint = Object.values(values)[0]
    const point = Object.keys(changingPoint)[0]
    const company = Object.values(changingPoint)[0]
    dispatch(changeRequestAction({ values, applicationId }))
    if (selected && selected.key === applicationId) {
      dispatch(
        selectRequestAction({
          [point]: {
            ...companies[company],
          },
        }),
      )
    }
  }

  const handleSelectedRequest = (_, selectedRows) => {
    dispatch(selectRequestAction(selectedRows[0]))
  }

  const dataSource = Object.keys(requests).map((id) => {
    const startPointCompany = companies[requests[id].startPoint]
    const endPointCompany = companies[requests[id].endPoint]
    return {
      key: id,
      startPoint: {
        value: startPointCompany.id,
        location: startPointCompany.location,
        coordinates: startPointCompany.coordinates,
      },
      endPoint: {
        value: endPointCompany.id,
        location: endPointCompany.location,
        coordinates: endPointCompany.coordinates,
      },
    }
  })

  return (
    <Form form={form} onValuesChange={handleCompanyPoints}>
      <Table
        scroll={scrollOption}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        bordered
        rowSelection={{
          type: 'radio',
          onChange: handleSelectedRequest,
        }}
      />
    </Form>
  )
}

export default CompanyTable
