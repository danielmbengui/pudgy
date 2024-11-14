"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarHidden({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className="navbar"
      tag="div"
      data-collapse="all"
      data-animation="over-right"
      data-duration="200"
      data-doc-height="1"
      config={{
        animation: "over-right",
        easing2: "ease",
        easing: "ease",
        _collapse: 0,
        collapse: "all",
        noScroll: false,
        duration: 200,
        docHeight: true,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
        <_Builtin.NavbarBrand
          className="logo-block no-menu"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="logo responsive-menu"
            width="auto"
            height="auto"
            loading="auto"
            alt=""
            src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf403_Logo.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className="right-nav-menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="nav-link color"
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Homepage"}</_Builtin.Block>
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
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
                  href: "/old-home",
                }}
              >
                {"Home (Portfolio)"}
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
              <_Builtin.Icon
                className="dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Features"}</_Builtin.Block>
              <_Builtin.Icon
                className="dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/features/features-1",
                }}
              >
                {"Features #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/features/features-2",
                }}
              >
                {"Features #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/features/features-3",
                }}
              >
                {"Features #3"}
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block>
              <_Builtin.Icon
                className="dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
              <_Builtin.Icon
                className="dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/blog-variations/blog-1",
                }}
              >
                {"Blog Style #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/blog-variations/blog-2",
                }}
              >
                {"Blog Style #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/blog-variations/blog-3",
                }}
              >
                {"Blog Style #3"}
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
              className="nav-link dropdown-toggle color"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
              <_Builtin.Icon
                className="dropdown-icon"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list sidebar" tag="nav">
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact/contact-1",
                }}
              >
                {"Contact #1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact/contact-2",
                }}
              >
                {"Contact #2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact/contact-3",
                }}
              >
                {"Contact #3"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact/contact-4",
                }}
              >
                {"Contact #4"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown-link"
                options={{
                  href: "/contact/contact-5",
                }}
              >
                {"Contact #5"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block className="nav-menu-content-block" tag="div">
            <_Builtin.Block className="nav-title" tag="div">
              {"Get the App Now!"}
            </_Builtin.Block>
            <_Builtin.Paragraph className="nav-paragraph">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className="app-store-link-button"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="app-store-button"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf47f_Button-App-Store.png"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="app-store-link-button"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="app-store-button"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3ef_Button-Google-play.png"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="menu-button" tag="div">
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
