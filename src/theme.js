import { createTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(225,45,50,0.8)',
    },
    secondary: {
      main: 'rgba(225,45,50,0.8)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
