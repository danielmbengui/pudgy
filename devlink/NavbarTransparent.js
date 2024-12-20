"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarTransparent({
  as: _Component = _Builtin.NavbarWrapper,
  componentLang,
  componentTheme,
  menuHome = "Accueil",
  menuServices = "Services",
  menuPartners = "Partenariat",
  menuContact = "Contact",
}) {
  return (
    <_Component
      className="navbar"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-no-scroll="1"
      config={{
        docHeight: false,
        noScroll: true,
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        collapse: "medium",
      }}
    >
      <_Builtin.NavbarContainer className="container-2" tag="div">
        <_Builtin.NavbarBrand
          className="logo-block"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="logo"
            width="auto"
            height="auto"
            loading="auto"
            alt=""
            src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/67327c8e622d156faa35f46b_pudgy_logo.png"
          />
          <_Builtin.Block className="text-block name-website" tag="div">
            {"Pudgy"}
          </_Builtin.Block>
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu className="nav-menu" tag="nav" role="navigation">
          <_Builtin.Block className="div-block-13" tag="div">
            <_Builtin.NavbarLink
              className="nav-link light primary black"
              options={{
                href: "#section-header",
              }}
            >
              {menuHome}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link light primary black community"
              options={{
                href: "#section-community",
              }}
            >
              {"Communauté"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link light primary black"
              options={{
                href: "#section-services",
              }}
            >
              {menuServices}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link light primary black pricing"
              options={{
                href: "#section-pricing",
              }}
            >
              {"Prix"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link light primary black partners"
              options={{
                href: "#section-partners",
              }}
            >
              {menuPartners}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link light primary black"
              options={{
                href: "#section-contact",
              }}
            >
              {menuContact}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
          <_Builtin.Block className="div-block-8" tag="div">
            <_Builtin.Block className="div-block-10" tag="div">
              <_Builtin.Block className="div-block-12" tag="div">
                {componentTheme}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="div-block-9" tag="div">
              <_Builtin.Block className="div-block-11" tag="div">
                {componentLang}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="transparant-menu-button" tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
