import react, { useEffect } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { appWithTranslation } from 'next-i18next';
import "@/devlink/global.css";
import "@/styles/globals.css";
import dynamic from 'next/dynamic';
const DynamicAd = dynamic(() => import('@/components/AdComponent'), { ssr: false });

function App({ Component, pageProps }) {
  return (
    <DevLinkProvider>
      <Component {...pageProps} />
      <DynamicAd />
    </DevLinkProvider>
  );
}

export default appWithTranslation(App);