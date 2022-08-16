import styled from 'styled-components'

const MainTitle = styled('h1')`
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #000000;

  span {
    color: ${(props) => props.theme.palette.accent};
  }
`

export default MainTitle
