import { createTheme } from '@material-ui/core/styles';
import { PrimaryColor } from './components/constants/theme';

export const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      input: {
        height: 17,
      },
      notchedOutline: {
        borderColor: '#EDEDED',
      },
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#EDEDED',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Regular',
    h1: {
      fontFamily: 'Medium',
      fontSize: 18,
    },
    h2: {
      fontFamily: 'Medium',
      fontSize: 15,
    },
    h3: {
      fontFamily: 'Regular',
      fontSize: 15,
    },
    h4: {
      fontSize: 14,
    },
  },
  palette: {
    primary: {
      main: PrimaryColor,
    },
  },
});
