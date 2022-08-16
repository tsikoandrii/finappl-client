import React from 'react'
import styled from 'styled-components'

import TableItem from '@atoms/table/TableItem'

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`
const Head = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.palette.accent};
  height: 58px;
  margin-bottom: 6px;

  ${TableItem} {
    color: #ffffff;
  }
`
const Body = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  box-shadow: 0 4px 13px 7px rgba(0, 0, 0, 0.04);
  margin-bottom: 6px;
`

const CONFIG = {
  headParam: 'Джерело',
  head: ['Клієнтура', 'Фріланс', 'Інше'],
}

const DATA = [
  {
    param: 'Січень',
    values: ['10 500', '1 000', '12 000'],
  },
  {
    param: 'Лютий',
    values: ['120 000', '5 000', '12 000'],
  },
  {
    param: 'Березень',
    values: ['0', '0', '0'],
  },
  {
    param: 'Квітень',
    values: ['220', '2220', '14 560'],
  },
]

const Table = () => {
  console.log(DATA, CONFIG)
  return (
    <StyledTable>
      <Head>
        <TableItem large>{CONFIG.headParam}</TableItem>
        {CONFIG.head.map((item) => (
          <TableItem key={item}>{item}</TableItem>
        ))}
      </Head>
      {DATA.map((item) => (
        <Body key={item.param}>
          <TableItem key={item.param} large>
            {item.param}
          </TableItem>
          {item.values.map((value) => (
            <TableItem data-currency="$" key={value}>
              {value}
            </TableItem>
          ))}
        </Body>
      ))}
    </StyledTable>
  )
}

export default Table
