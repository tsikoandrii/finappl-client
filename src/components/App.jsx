import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import theme from '@theme/default'
import MuiTheme from '@theme/muiTheme'
import GlobalCSS from '@theme/global'
import '@theme/reset.scss'

// Pages
import Home from '@pages/Home'
import Earnings from '@pages/Earnings'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <GlobalCSS />
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="earnings" element={<Earnings />} />
        </Routes>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default App
