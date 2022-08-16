import styled from 'styled-components'

const DeveloperLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #676767;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.blue};
  }
`

export default DeveloperLabel
