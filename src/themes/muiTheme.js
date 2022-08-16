import { createTheme } from '@mui/material/styles'
import theme from './default'

const MuiTheme = createTheme({
  typography: {
    fontFamily: theme.fonts.main,
  },
})

export default MuiTheme
