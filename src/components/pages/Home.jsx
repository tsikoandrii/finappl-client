import React from 'react'
import styled from 'styled-components'

import PageTemplate from '@templates/PageTemplate'
import MainTitle from '@atoms/title/MainTitle'
import AllAccounts from '@organisms/AllAccounts'
import EarningStatistic from '@organisms/EarningStatistic'
import SpendingStatistic from '@organisms/SpendingStatistic'

const Wrapper = styled.div`
  ${MainTitle} {
    margin-bottom: 45px;
  }

  .block {
    &:nth-child(2) {
      margin-bottom: 72px;
    }

    &:nth-child(3) {
      margin-bottom: 72px;
    }

    &:nth-child(4) {
      margin-bottom: 200px;
    }
  }
`

const Home = () => {
  return (
    <Wrapper>
      <PageTemplate>
        <MainTitle>
          Фінансовий облік за <span>2022 рік</span>
        </MainTitle>
        <AllAccounts />
        <EarningStatistic />
        <SpendingStatistic />
      </PageTemplate>
    </Wrapper>
  )
}

export default Home
