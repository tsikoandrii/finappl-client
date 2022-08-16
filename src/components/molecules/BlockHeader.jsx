import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BlockTitle from '@atoms/title/BlockTitle'

const StyledBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BlockHeader = ({ title, children }) => {
  return (
    <StyledBlockHeader>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </StyledBlockHeader>
  )
}

BlockHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default BlockHeader
