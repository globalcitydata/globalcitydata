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
    fontSize: 10,
    useNextVariants: true,
    fontFamily: ['Lato', 'Rosario', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
        fontSize: '1.1rem',
      },
    },
    MuiFab: {
      label: {
        textTransform: 'none',
        fontSize: '1.2rem',
      },
    },
    MuiTab: {
      label: {
        fontSize: '1.04rem',
      },
    },
    MuiTypography: {
      h1: { fontSize: '3.5rem' }, // page headers
      h2: { fontSize: '3rem' }, // secondary headers
      h3: {
        fontSize: '2.5rem',
      },
      h4: {
        fontSize: '1.65rem',
      },
      h5: {
        // primary titles
        fontSize: '1.5rem',
        color: blue[500],
      },
      h6: {
        // secondary titles
        fontSize: '1.35rem',
      },
      body2: {
        fontSize: '1.02rem',
      },
    },
    MuiListItem: {
      root: {
        paddingBottom: '0',
      },
    },
  },
  props: {},
});

export default theme;
