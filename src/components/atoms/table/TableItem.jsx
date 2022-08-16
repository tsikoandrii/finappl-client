import styled from 'styled-components'

const TableItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  height: 100%;
  padding: 17px 0;
  display: flex;
  align-items: center;
  border-left: 2px solid #ffffff;

  &:first-child {
    border-left: none;
  }

  &::after {
    content: '\\00a0'attr(data-currency);
    color: ${(props) => props.theme.palette.blue};
  }

  ${(props) =>
    props.large
      ? `
        flex: 2;
        padding-left: 24px;
      `
      : `
        flex: 1.5;
        justify-content: center;
      `}
`

export default TableItem
