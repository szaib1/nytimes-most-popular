const components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        WebkitFontSmoothing: 'auto',
      },

      "*": {
        boxSizing: 'border-box',
      },

      "a:active": {
        textDecoration: 'none'
      },

      'a': {
        textDecoration: 'none',
      },

      body: {
        backgroundColor: '#F8F8F9',

        "& .MuiMenu-paper": {
          maxHeight: '180px'
        },
      },
    },
  },
}

export default components;