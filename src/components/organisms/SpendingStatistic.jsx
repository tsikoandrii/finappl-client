import React from 'react'

import BlockHeader from '@molecules/BlockHeader'
import Table from '@molecules/Table'
import ArrowButton from '@atoms/button/ArrowButton'

const SpendingStatistic = () => {
  return (
    <div className="block">
      <div className="block__header">
        <BlockHeader title="Статистика витрат">
          <ArrowButton text="Дивитися графік" />
        </BlockHeader>
      </div>
      <div className="block__body">
        <Table />
      </div>
    </div>
  )
}

export default SpendingStatistic
