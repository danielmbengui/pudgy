import react, { useEffect } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import "@/devlink/global.css";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (<>
    <head>
      <title>{"Pudgy | L'application pour les dog sitters, propriétaires et amoureux des chiens"}</title>
    </head>
    <DevLinkProvider>
      <Component {...pageProps} />
    </DevLinkProvider>
  </>);
}
