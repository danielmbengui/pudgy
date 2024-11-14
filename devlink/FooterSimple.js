"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterSimple({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="simple-footer"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Row
          className="footer-row"
          tag="div"
          columns={{
            main: "3|6|3",
          }}
        >
          <_Builtin.Column className="footer-logo-column-left" tag="div">
            <_Builtin.Block className="footer-logo" tag="div">
              {"Startup"}
            </_Builtin.Block>
            <_Builtin.Block className="footer-logo subtitle" tag="div">
              {"Webflow Startup Kit"}
            </_Builtin.Block>
          </_Builtin.Column>
          <_Builtin.Column className="footer-menu-column" tag="div">
            <_Builtin.Link
              className="footer-inline-link"
              button={false}
              block=""
              options={{
                href: "/homepages/home-business-3",
              }}
            >
              {"Home"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-inline-link"
              button={false}
              block=""
              options={{
                href: "/about/about-1",
              }}
            >
              {"About us"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-inline-link"
              button={false}
              block=""
              options={{
                href: "/pricing/pricing-1",
              }}
            >
              {"Pricing"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-inline-link"
              button={false}
              block=""
              options={{
                href: "/contact/contact-1",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-inline-link"
              button={false}
              block=""
              options={{
                href: "/blog-variations/blog-1",
              }}
            >
              {"Blog"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="footer-social-col-right" tag="div">
            <_Builtin.Link
              className="footer-social-icon"
              button={false}
              target="_blank"
              block="inline"
              options={{
                href: "http://www.facebook.com",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="footer-small-social-icon"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf4b8_Icon-facebook.png"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-social-icon"
              button={false}
              target="_blank"
              block="inline"
              options={{
                href: "http://www.twitter.com",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="footer-small-social-icon"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3ec_Icon-twitter.png"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-social-icon"
              button={false}
              target="_blank"
              block="inline"
              options={{
                href: "http://www.google.com",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="footer-small-social-icon"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3f1_Icon-google.png"
              />
            </_Builtin.Link>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
      <_Builtin.Block className="simple-bottom-footer" tag="div">
        <_Builtin.Container className="container" tag="div">
          <_Builtin.Paragraph className="bottom-footer-paragraph">
            <_Builtin.Strong data-new-link="true">
              {"Copyright © Startup"}
            </_Builtin.Strong>
            {" - Images used for demonstration purpose only ("}
            <_Builtin.Link
              className="bottom-footer-link"
              button={false}
              block=""
              options={{
                href: "/template-information/licensing",
              }}
            >
              {"Licenses"}
            </_Builtin.Link>
            {")"}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph className="bottom-footer-paragraph right">
            {"Template design by"}
            <_Builtin.Link
              className="bottom-footer-link"
              button={false}
              target="_blank"
              block=""
              options={{
                href: "http://www.studiocorvus.com",
                target: "_blank",
              }}
            >
              {"Studio Corvus"}
            </_Builtin.Link>
            {"-"}
            <_Builtin.Link
              className="bottom-footer-link"
              button={false}
              target="_blank"
              block=""
              options={{
                href: "https://webflow.com/templates/designers/rowan-hartsuiker",
                target: "_blank",
              }}
            >
              {"View all templates"}
            </_Builtin.Link>
          </_Builtin.Paragraph>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
