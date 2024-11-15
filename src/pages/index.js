import React, { useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { HomePage } from "@/devlink";
import { Button, Stack, Typography } from "@mui/material";
import { LINK_SWISS_FLAG } from "@/constants";
import { LINK_FRENCH_FLAG } from "@/constants";
import SwitchTheme from "@/components/SwitchTheme";
import { LINK_BRITISH_FLAG } from "@/constants";
import { LINK_GERMAN_FLAG } from "constants";
import { LINK_ITALIAN_FLAG } from "constants";
import GoogleMap from "components/GoogleMap";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { TAB_NAMESPACES } from "constants";
import { TAB_LANGUAGES } from "constants";
import { NAMESPACE_HOME } from "constants";
import SelectLang from "components/SelectLang";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();
  const { t, i18n} = useTranslation(NAMESPACE_HOME); // 'common' fait référence au fichier JSON utilisé

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale: i18n.language });
    console.log(router.pathname, "lang", i18n.language)
  }, [i18n.language]);

  return (
    <>

      <HomePage
      componentGoogleMap={<GoogleMap />}
      componentLang={<SelectLang lang={i18n.language} />}
      componentTheme={<SwitchTheme />}
      
        videoHeaderBack={<Stack sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, background: 'var( --blue-pudgy-shadow)' }}>
          <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              <source
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e%2F673331c3670a32db371136c0_i_want_a_video_of_a_man_and_a_woman__walking_with_two_dogs_in_forest_617613-transcode.mp4"
                type="video/mp4"
              />
              {"Your browser does not support the video tag."}
            </video>
          </div>
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, background: 'var( --blue-pudgy-shadow)' }} />

        </Stack>}
      />
    </>

  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, TAB_NAMESPACES, null, TAB_LANGUAGES,)),
  },
});
