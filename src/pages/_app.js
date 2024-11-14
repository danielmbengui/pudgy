import react, { useEffect } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import "@/devlink/global.css";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {

  return (<DevLinkProvider>
    <Component {...pageProps} />
  </DevLinkProvider>);
}
