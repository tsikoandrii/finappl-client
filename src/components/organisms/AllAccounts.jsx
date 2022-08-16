import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import BlockHeader from '@molecules/BlockHeader'
import Account from '@atoms/Account'
import ArrowButton from '@atoms/button/ArrowButton'

import theme from '@theme/default'

const AllAccounts = () => {
  return (
    <div className="block">
      <div className="block__header">
        <BlockHeader title="Всі рахунки">
          <ArrowButton text="Дивитися графік" />
        </BlockHeader>
      </div>
      <div className="block__body">
        <Swiper
          style={{ overflow: 'visible' }}
          slidesPerView="auto"
          spaceBetween={24}
          grabCursor
        >
          <SwiperSlide style={{ width: 400 }}>
            <Account
              name="Гривневий рахунок"
              balance="19 300 UAH"
              earning="1244.94 UAH"
              spending="-124.23 UAH"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: 400 }}>
            <Account
              name="Доларовий рахунок"
              balance="2 000 USD"
              earning="1200 USD"
              accountTheme={theme.accounts.blackMetallic}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: 400 }}>
            <Account
              name="Євро рахунок"
              balance="222 000 EUR"
              earning="30 000 EUR"
              accountTheme={theme.accounts.accent}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: 400 }}>
            <Account
              name="Євро рахунок"
              balance="222 000 EUR"
              earning="30 000 EUR"
              accountTheme={theme.accounts.accent}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AllAccounts
