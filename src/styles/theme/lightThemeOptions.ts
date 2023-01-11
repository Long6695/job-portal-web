import {ThemeOptions} from '@mui/material'
import React from 'react'
/**
 *
 * red: #e63946
 * white: #f1faee
 * lightBlue: #a8dadc
 * blue: #219ebc
 * darkBlue: #457b9d
 * deepBlue: #1d3557
 *

 */

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    laptop: true
    desktop: true
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    defaultText: React.CSSProperties
    label: React.CSSProperties
    link: React.CSSProperties
    white: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    defaultText?: React.CSSProperties
    label?: React.CSSProperties
    link?: React.CSSProperties
    white?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    defaultText: true
    label: true
    link: true
    white: true
  }
}

const lightThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: 'light',
  },
  typography: {
    defaultText: {
      color: '#457b9d',
      fontSize: 14,
      fontWeight: 400,
    },
    label: {
      color: '#457b9d',
      fontSize: 16,
      fontWeight: 700,
    },
    link: {
      color: '#219ebc',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
    },
    white: {
      color: '#f1faee',
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            backgroundColor: '#457b9d',
            ':hover': {
              backgroundColor: '#1d3557',
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {variant: 'h5'},
          style: {
            color: '#1d3557',
            fontSize: 24,
            fontWeight: 600,
          },
        },
      ],
    },
  },
}

export default lightThemeOptions
