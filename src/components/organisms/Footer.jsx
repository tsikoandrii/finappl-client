import React from 'react'
import styled from 'styled-components'
import DeveloperLabel from '@atoms/DeveloperLabel'

const StyledFooter = styled.div`
  background: #f7faff;
  padding: 19px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Copyright = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #676767;
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <Copyright>© 2021-2022 finappl.com</Copyright>
        <DeveloperLabel>
          developed by <a href="https://tsiko.site/">tsiko</a>
        </DeveloperLabel>
      </div>
    </StyledFooter>
  )
}

export default Footer
