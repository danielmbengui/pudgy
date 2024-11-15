import Image from "next/image";
import localFont from "next/font/local";
import { HomePage } from "@/devlink";
import { Stack } from "@mui/material";
import { useEffect } from "react";

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
