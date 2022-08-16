import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

import TextButton from '@atoms/button/TextButton'

import theme from '@theme/default'

import ArrowIcon from '@assets/icons/arrow.svg'

const ArrowButton = ({ text }) => {
  return (
    <TextButton>
      <TextButton.Text color={theme.palette.accent}>{text}</TextButton.Text>
      <TextButton.Icon>
        <SVG src={ArrowIcon} />
      </TextButton.Icon>
    </TextButton>
  )
}

ArrowButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ArrowButton
