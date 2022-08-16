import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import Select from '@atoms/select/Select'

// const StyledValueField = styled.div``

const MultipleSelect = ({ placeholder }) => {
  const renderValue = (value) => {
    return `${placeholder}: ${value.join(', ')}`
  }

  return (
    <Select
      placeholder={placeholder}
      multiple
      width={300}
      renderValue={renderValue}
    >
      <Select.Option value={20}>Аддв</Select.Option>
      <Select.Option value={55}>2e</Select.Option>
      <Select.Option value={34}>rew</Select.Option>
      <Select.Option value={53}>43t</Select.Option>
    </Select>
  )
}

MultipleSelect.propTypes = {
  placeholder: PropTypes.string,
}

export default MultipleSelect
