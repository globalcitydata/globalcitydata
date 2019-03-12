import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 11,
    useNextVariants: true,
    fontFamily: ['Lato', 'Rosario', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      h3: {
        marginBottom: '3rem',
      },
      h4: {
        marginBottom: '2rem',
      },
      h5: {
        marginBottom: '1.5rem',
      },
      subtitle2: {
        marginBottom: '1.5rem',
      },
    },
  },
  props: {},
});

export default theme;
