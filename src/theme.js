import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: 'rgba(225,45,50,0.8)',
    },
    secondary: {
      main: 'rgb(114,47,47)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
}));

export default theme;
