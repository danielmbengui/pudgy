import react, { useEffect } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { appWithTranslation } from 'next-i18next';
import "@/devlink/global.css";
import "@/styles/globals.css";


function App({ Component, pageProps }) {
  /*
  <head>
  <title>{"Pudgy | L'application pour les dog sitters, propriétaires et amoureux des chiens"}</title>
</head>
  */
  return (
    <DevLinkProvider>
      <Component {...pageProps} />
    </DevLinkProvider>
  );
}

export default appWithTranslation(App);