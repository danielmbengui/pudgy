"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CallToActionBlock({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section cta-section"
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
          className="button cta-button"
          button={true}
          macro={{
            guid: "57c07343-4b0a-4ab4-d20c-50be9ae6519f",
          }}
          data-ix="open-sign-up-popup"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Get Started now"}
        </_Builtin.Link>
      </_Builtin.Container>
    </_Component>
  );
}
