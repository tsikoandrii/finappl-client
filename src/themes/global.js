import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: ${(props) => props.theme.fonts.main}, sans-serif;
  }
  
  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  
  .page {
    padding-top: 48px;
  }
  
  .block {
  
    &__header, &__body {
      width: 100%;
      
      &:first-child {
        margin-bottom: 24px;
      }
    }
    
    &__filter {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      
      * {
        margin-right: 12px;
      }
    }
    
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 8px;
      border-top: 3px solid ${(props) => props.theme.palette.accent};
      padding-top: 16px;
    }
  }
`
