import base from '@theme-ui/preset-base';

const theme = {
  ...base,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  colors: {
    text: '#444',
    background: '#fff',
    primary: '#8c7ae6',
    secondary: '#6555b1',
    highlight: '##11e',
    muted: '#f6f6ff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0fc',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#011',
      },
    },
  },
  fonts: {
    body: '"Source Sans Pro", system-ui, sans-serif',
    heading: 'Rubik',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    heading: 1,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  wrapper: {
    spaced: {
      width: '96%',
      paddingX: 2,
      margin: '0 auto',
    },
    row: {
      width: '100%',
      padding: 0,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    span: {
      color: '#fff',
    },
    input: {
      fontFamily: 'heading',
    },
  },
};

export default theme;
