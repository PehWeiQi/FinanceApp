import React from 'react'
import Table from '../../Components/Table/Table'
import { testIncomeStatementData } from '../../Components/Table/testData'

const data = testIncomeStatementData;
type Props = {}

const DesignPage = (props: Props) => {
  return (
    <div>
        <h1>Design Page</h1>
        <Table/>
    </div>
  )
}

export default DesignPage