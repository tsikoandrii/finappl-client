import React from 'react'
import styled from 'styled-components'

import Nav from '@molecules/Nav'

const StyledHeader = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.accent};

  .container {
    display: flex;
    justify-content: center;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Nav />
      </div>
    </StyledHeader>
  )
}

export default Header
