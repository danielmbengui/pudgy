"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HomePartners1({
  as: _Component = _Builtin.Section,
  titlePartners = "Nos partenaires",
  subtitlePartners = "Rejoignez une communauté qui partage vos valeurs et celles des amoureux des chiens.",
}) {
  return (
    <_Component
      className="image-section clients _1"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="image-section-overlay dark-gradient" tag="div">
        <_Builtin.Container className="container" tag="div">
          <_Builtin.Block className="section-title-wrapper" tag="div">
            <_Builtin.Heading className="section-title partners" tag="h2">
              {titlePartners}
            </_Builtin.Heading>
            <_Builtin.Block className="section-description partners" tag="div">
              {subtitlePartners}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Row
            className="logos-row"
            tag="div"
            columns={{
              main: "2|2|2|2|2|2",
              small: "4|4|4|4|4|4",
              tiny: "4|4|4|4|4|4",
            }}
          >
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf4bc_logo-adobe-white.png"
              />
            </_Builtin.Column>
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf44a_logo-google-white.png"
              />
            </_Builtin.Column>
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3fd_logo-netflix-white.png"
              />
            </_Builtin.Column>
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf498_Logo-spotify-white.png"
              />
            </_Builtin.Column>
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf4e3_logo-webflow-white.png"
              />
            </_Builtin.Column>
            <_Builtin.Column className="logo-column" tag="div">
              <_Builtin.Image
                className="client-logo"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf47b_Logo-skype-white.png"
              />
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
