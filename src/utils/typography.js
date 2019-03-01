import Typography from 'typography';
import theme from 'typography-theme-twin-peaks';

// const theme = {
//   baseFontSize: '22px',
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     'Rosario',
//     'Helvetica Neue',
//     'Segoe UI',
//     'Helvetica',
//     'Arial',
//     'sans-serif',
//   ],
//   bodyFontFamily: ['Roboto', 'serif'],
//   // See below for the full list of options.
// };

// Overrides
theme.baseFontSize = '22px'; // was 21px.

const typography = new Typography(theme);

export default typography;
