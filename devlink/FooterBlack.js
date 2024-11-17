"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterBlack({
  as: _Component = _Builtin.Section,
  leitmotiv = "Une communauté dédiée au bien-être canin",
  menuHome = "Accueil",
  menuServices = "Services",
  menuPartners = "Partenariat",
  menuContact = "Contact",
  menuNavigation = "Navigation",
  menuFastLinks = "Lien rapides",
  menuSocials = "Réseaux",
  menuLegacy = "Mentions légales",
  menuPrivacy = "Politique de confidentialité",
  menuTerms = "Conditions d'utilisation",
  moreQuestions = "Des questions? Tu peux nous contacter à ",
  copyright = " Tous droits réservés.",
  promo = (
    <>
      {"Crée avec passion avec"}
      {"-"}
    </>
  ),
}) {
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
              {leitmotiv}
            </_Builtin.Block>
          </_Builtin.Column>
          <_Builtin.Column className="white-footer-column" tag="div">
            <_Builtin.Block className="dark-footer-title" tag="div">
              {menuNavigation}
            </_Builtin.Block>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuHome}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link community"
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
              {menuServices}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link pricing"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Prix"}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link partners"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuPartners}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuContact}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="white-footer-column" tag="div">
            <_Builtin.Block className="dark-footer-title" tag="div">
              {menuFastLinks}
            </_Builtin.Block>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuLegacy}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuPrivacy}
            </_Builtin.Link>
            <_Builtin.Link
              className="light-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {menuTerms}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column
            className="white-footer-column socials-footer"
            tag="div"
          >
            <_Builtin.Block className="dark-footer-title" tag="div">
              {menuSocials}
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
                {moreQuestions}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
        <_Builtin.Block
          className="bottom-footer-block white-footer-block w-clearfix"
          tag="div"
        >
          <_Builtin.Paragraph className="bottom-footer-paragraph dark">
            {copyright}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph className="bottom-footer-paragraph right dark">
            {promo}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
