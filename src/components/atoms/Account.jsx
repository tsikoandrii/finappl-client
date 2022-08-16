import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '@theme/default'

const AccountName = styled('strong')`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`

const AccountInfo = styled('div')`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => (props.isSpending ? '#FFB800' : '#ffffff')};
`

const AccountBalance = styled('div')`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
`

const StyledAccount = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1.6 / 1;
  border-radius: 8px;
  padding: 20px;
  background: ${(props) => props.bg};

  .account {
    &__info {
      margin-top: auto;

      ${AccountInfo}:first-child:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  ${AccountBalance} {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`

const Account = ({ name, earning, spending, balance, accountTheme }) => {
  return (
    <StyledAccount bg={accountTheme.bg} className="account">
      <AccountName>{name}</AccountName>
      <div className="account__info">
        {earning && (
          <AccountInfo>
            Прибуток: <br /> {earning}
          </AccountInfo>
        )}
        {spending && (
          <AccountInfo isSpending>
            Витрати: <br /> {spending}
          </AccountInfo>
        )}
      </div>
      <AccountBalance>{balance}</AccountBalance>
    </StyledAccount>
  )
}

Account.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  earning: PropTypes.string,
  spending: PropTypes.string,
  accountTheme: PropTypes.objectOf(PropTypes.string),
}

Account.defaultProps = {
  accountTheme: theme.accounts.metallic,
}

export default Account
