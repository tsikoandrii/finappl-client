import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

import TextButton from '@atoms/button/TextButton'

import theme from '@theme/default'

import CaretIcon from '@assets/icons/caret.svg'

const CaretButton = ({ text }) => {
  return (
    <TextButton>
      <TextButton.Text color={theme.palette.blue}>{text}</TextButton.Text>
      <TextButton.Icon>
        <SVG transform="rotate(-90)" src={CaretIcon} />
      </TextButton.Icon>
    </TextButton>
  )
}

CaretButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CaretButton
