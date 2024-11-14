"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterBlack({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="white-footer dark"
      tag="div"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Row
          className="footer-row white-footer-row"
          tag="div"
          columns={{
            main: "3|3|3|3",
          }}
        >
          <_Builtin.Column
            className="white-footer-column logo-footer"
            tag="div"
          >
            <_Builtin.Block className="div-block-3" tag="div">
              <_Builtin.Image
                width="100"
                height="Auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/67327c8e622d156faa35f46b_pudgy_logo.png"
              />
              <_Builtin.Block className="text-block name-website" tag="div">
                {"Pudgy"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="text-block-8" tag="div">
              {"Une communauté dédiée au bien-être canin"}
            </_Builtin.Block>
          </_Builtin.Column>
          <_Builtin.Column className="white-footer-column" tag="div">
            <_Builtin.Block className="dark-footer-title" tag="div">
              {"navigation"}
            </_Builtin.Block>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Accueil"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Communauté"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Services"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Prix"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Partenariat"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="white-footer-column" tag="div">
            <_Builtin.Block className="dark-footer-title" tag="div">
              {"Lien rapides"}
            </_Builtin.Block>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Mentions légales"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Politique de confidentialité"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Conditions d'utilisation"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column
            className="white-footer-column socials-footer"
            tag="div"
          >
            <_Builtin.Block className="dark-footer-title" tag="div">
              {"Réseaux"}
            </_Builtin.Block>
            <_Builtin.Block
              className="home-intro-link-block _3 test"
              tag="div"
              href="/homepages/home-iphone-app"
            >
              <_Builtin.Link
                className="color-social-button"
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
                className="color-social-button twitter"
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
                className="color-social-button google"
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
            </_Builtin.Block>
            <_Builtin.Block className="footer-contact-info-block" tag="div">
              <_Builtin.Paragraph className="paragraph">
                {"Des questions? Tu peux nous contacter à "}
                <_Builtin.Link
                  className="link"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"info@pudgy.com"}
                </_Builtin.Link>
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
        <_Builtin.Block
          className="bottom-footer-block white-footer-block w-clearfix"
          tag="div"
        >
          <_Builtin.Paragraph className="bottom-footer-paragraph dark">
            <_Builtin.Strong className="bold-text-2" data-new-link="true">
              {"Copyright © Budgy"}
            </_Builtin.Strong>
            {" - 2024-2025"}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph className="bottom-footer-paragraph right dark">
            {"Crée avec passion"}
            <_Builtin.Link
              className="bottom-footer-link dark"
              button={false}
              target="_blank"
              block=""
              options={{
                href: "http://www.studiocorvus.com",
                target: "_blank",
              }}
            >
              {" Webflow"}
            </_Builtin.Link>
            {"-"}
            <_Builtin.Link
              className="bottom-footer-link dark"
              button={false}
              target="_blank"
              block=""
              options={{
                href: "https://webflow.com/templates/designers/rowan-hartsuiker",
                target: "_blank",
              }}
            >
              {"Devlink"}
            </_Builtin.Link>
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
