import React, { useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { HomePage } from "@/devlink";
import { Stack, Typography } from "@mui/material";
import { LINK_SWISS_FLAG } from "@/constants";
import { LINK_FRENCH_FLAG } from "@/constants";
import SwitchTheme from "@/components/SwitchTheme";
import { LINK_BRITISH_FLAG } from "@/constants";
import { LINK_GERMAN_FLAG } from "constants";
import { LINK_ITALIAN_FLAG } from "constants";
import GoogleMap from "components/GoogleMap";

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
  return (
    <>

      <HomePage
      componentGoogleMap={<GoogleMap />}
      componentLang={<Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
        <Stack alignItems={'center'} justifyContent={'center'}>
        <Image src={LINK_FRENCH_FLAG} width={20} height={20} loading="lazy" alt="suisse flag" />
        <Typography fontSize={12} sx={{color:'var(--blue-pudgy)'}}>Français</Typography>
      </Stack>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Image src={LINK_GERMAN_FLAG} width={20} height={20} loading="lazy" alt="suisse flag" />
        <Typography fontSize={12} sx={{color:'var(--blue-pudgy)'}}>Allemand</Typography>
      </Stack>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Image src={LINK_ITALIAN_FLAG} width={20} height={20} loading="lazy" alt="suisse flag" />
        <Typography fontSize={12} sx={{color:'var(--blue-pudgy)'}}>Italien</Typography>
      </Stack>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Image src={LINK_BRITISH_FLAG} width={20} height={20} loading="lazy" alt="suisse flag" />
        <Typography fontSize={12} sx={{color:'var(--blue-pudgy)'}}>Anglais</Typography>
      </Stack>
      </Stack>}
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
