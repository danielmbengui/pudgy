"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarWithColorButton({
  as: _Component = _Builtin.NavbarWrapper,
}) {
  return (
    <_Component
      className="navbar with-color-button"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
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
            src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf403_Logo.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu className="nav-menu" tag="nav" role="navigation">
          <_Builtin.NavbarLink
            className="nav-link thin-light"
            options={{
              href: "#",
            }}
          >
            {"Intro"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper
            className="dropdown"
            tag="div"
            delay="0"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="nav-link dropdown-toggle thin-light"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Homepage"}</_Builtin.Block>
              <_Builtin.Icon
                className="small-dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-download",
                }}
              >
                {"Home (Download)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-iphone-app",
                }}
              >
                {"Home (iPhone App)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-ipad-app",
                }}
              >
                {"Home (iPad App)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/old-home",
                }}
              >
                {"Home (Portfolio)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-business",
                }}
              >
                {"Home (Business 1)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-business-2",
                }}
              >
                {"Home (Business 2)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-personal",
                }}
              >
                {"Home (Personal)"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/home-coming-soon",
                }}
              >
                {"Home (Coming Soon)"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className="dropdown"
            tag="div"
            delay="0"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="nav-link dropdown-toggle thin-light"
              tag="div"
            >
              <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
              <_Builtin.Icon
                className="small-dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/about/about-1",
                }}
              >
                {"About #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/about/about-2",
                }}
              >
                {"About #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/about/about-3",
                }}
              >
                {"About #3"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/about/about-4",
                }}
              >
                {"About #4"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/about/about-5",
                }}
              >
                {"About #5"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className="dropdown"
            tag="div"
            delay="0"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="nav-link dropdown-toggle thin-light"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Portfolio"}</_Builtin.Block>
              <_Builtin.Icon
                className="small-dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/portfolio/portfolio-1",
                }}
              >
                {"Portfolio #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/portfolio/portfolio-2",
                }}
              >
                {"Portfolio #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/portfolio/portfolio-3",
                }}
              >
                {"Portfolio #3"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/portfolio/portfolio-4",
                }}
              >
                {"Portfolio #4"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className="dropdown"
            tag="div"
            delay="0"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="nav-link dropdown-toggle thin-light"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block>
              <_Builtin.Icon
                className="small-dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/pricing/pricing-1",
                }}
              >
                {"Pricing #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/pricing/pricing-2",
                }}
              >
                {"Pricing #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/pricing/pricing-3",
                }}
              >
                {"Pricing #3"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/pricing/pricing-4",
                }}
              >
                {"Pricing #4"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/pricing/pricing-5",
                }}
              >
                {"Pricing #5"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className="dropdown"
            tag="div"
            delay="0"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="nav-link dropdown-toggle thin-light"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
              <_Builtin.Icon
                className="small-dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact-pages/contact-1",
                }}
              >
                {"Contact #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact-pages/contact-2",
                }}
              >
                {"Contact #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact-pages/contact-3",
                }}
              >
                {"Contact #3"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact-pages/contact-4",
                }}
              >
                {"Contact #4"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact-pages/contact-5",
                }}
              >
                {"Contact #5"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className="nav-link with-color"
            options={{
              href: "#",
            }}
          >
            {"Free Estimate"}
          </_Builtin.NavbarLink>
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
