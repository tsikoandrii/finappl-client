import React from 'react'

import BlockHeader from '@molecules/BlockHeader'
import Table from '@molecules/Table'
import ArrowButton from '@atoms/button/ArrowButton'
import Select from '@atoms/select/Select'
import MultipleSelect from '@atoms/select/MultipleSelect'
import CaretButton from '@atoms/button/CaretButton'

import USDIcon from '@assets/icons/currency/usd.svg'

const EarningStatistic = () => {
  return (
    <div className="block">
      <div className="block__header">
        <BlockHeader title="Статистика доходу">
          <ArrowButton text="Дивитися графік" />
        </BlockHeader>
      </div>
      <div className="block__body">
        <div className="block__filter">
          <Select placeholder="Виберіть нижче">
            <Select.Option value="ddd">ddd</Select.Option>
          </Select>
          <Select placeholder="Виберіть валюту">
            <Select.Option value="usd">
              <img src={USDIcon} alt="usd icon" />
              USD
            </Select.Option>
          </Select>
          <MultipleSelect placeholder="Категорії" />
        </div>
        <Table />
      </div>
      <div className="block__footer">
        <CaretButton text="Статистика" />
      </div>
    </div>
  )
}

export default EarningStatistic
