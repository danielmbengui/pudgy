"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CallToActionBlockBlue({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section blue-cta-section"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Heading className="dark-cta-title" tag="h4">
          {
            "Join 150,000 companies around the world that lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
          }
        </_Builtin.Heading>
        <_Builtin.Link
          className="button cta-button white"
          button={true}
          block=""
          options={{
            href: "/sign-up-forms/sign-up-2",
          }}
        >
          {"Get Started now"}
        </_Builtin.Link>
      </_Builtin.Container>
    </_Component>
  );
}
