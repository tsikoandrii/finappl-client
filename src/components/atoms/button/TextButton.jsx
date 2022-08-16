import styled from 'styled-components'

const Icon = styled.div`
  svg {
    width: 24px;
    height: 24px;

    &,
    * {
      fill: ${(props) => props.color};
    }
  }
`

const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.color};
`

const TextButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${Icon}, ${Text} {
    &:first-child {
      margin-right: 10px;
    }
  }
`

TextButton.Icon = Icon
TextButton.Text = Text

export default TextButton
