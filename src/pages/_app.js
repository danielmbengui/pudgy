import react, { useEffect } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { appWithTranslation } from 'next-i18next';
import "@/devlink/global.css";
import "@/styles/globals.css";
import dynamic from 'next/dynamic';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const DynamicAd = dynamic(() => import('@/components/AdComponent'), { ssr: false });

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2c86d2',
        },
        // ...other tokens
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#E0C2FF',
        },
        // ...other tokens
      },
    },
  },
});


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <DevLinkProvider>
      <Component {...pageProps} />
      <DynamicAd />
    </DevLinkProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);