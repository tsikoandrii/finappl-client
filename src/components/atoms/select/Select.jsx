import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const StyledSelect = styled(MuiSelect)`
  width: 100%;
  height: 45px;
  max-width: ${(props) => `${props.width}px`};
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 100% !important;

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c7c7c7;
    border-radius: 8px;
  }

  .MuiSelect-select {
    display: flex;
    align-items: center;

    img {
      margin-right: 12px;
    }
  }
`

const StyledMenuItem = styled(MenuItem)`
  img {
    margin-right: 12px;
  }
`

const Select = ({ children, placeholder, multiple, width, ...props }) => {
  const [value, setValue] = useState(multiple ? [] : '')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <StyledSelect
      multiple={multiple}
      displayEmpty
      value={value}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Without label' }}
      width={width}
      {...props}
    >
      <StyledMenuItem disabled value="">
        {placeholder}
      </StyledMenuItem>
      {children}
    </StyledSelect>
  )
}

Select.Option = StyledMenuItem

Select.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.node,
  multiple: PropTypes.bool,
  width: PropTypes.number,
}

Select.defaultProps = {
  width: 180,
}

export default Select
