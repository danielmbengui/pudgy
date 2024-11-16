"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HomeHeader({
  as: _Component = _Builtin.BackgroundVideoWrapper,
  videoHeaderBack,
}) {
  return (
    <_Component
      className="hero-video"
      tag="div"
      sources={[
        "https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e%2F673331c3670a32db371136c0_i_want_a_video_of_a_man_and_a_woman__walking_with_two_dogs_in_forest_617613-transcode.webm",
        "https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e%2F673331c3670a32db371136c0_i_want_a_video_of_a_man_and_a_woman__walking_with_two_dogs_in_forest_617613-transcode.mp4",
      ]}
      posterImage="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e%2F673331c3670a32db371136c0_i_want_a_video_of_a_man_and_a_woman__walking_with_two_dogs_in_forest_617613-poster-00001.jpg"
      autoPlay={true}
      loop={true}
    >
      <_Builtin.Block
        className="hero-overlay-block"
        tag="div"
        id="section-header"
      >
        <_Builtin.Block tag="div">{videoHeaderBack}</_Builtin.Block>
        <_Builtin.Container className="container hero-container" tag="div">
          <_Builtin.Heading
            className="hero-main-title home"
            macro={{
              guid: "c6e2d0ad-4651-1882-bde2-4bd23716782a",
            }}
            tag="h1"
            data-ix="fade-in-on-load"
          >
            {"Une communauté dédiée au bien-être canin"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className="hero-main-title subtitle"
            macro={{
              guid: "c69cbed8-f72e-d6e7-d91a-d42d7563a771",
            }}
            tag="h2"
            data-ix="fade-in-on-load-2"
          >
            {
              "Découvre Pudgy, une application qui simplifie la vie des amoureux des chiens."
            }
          </_Builtin.Heading>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
