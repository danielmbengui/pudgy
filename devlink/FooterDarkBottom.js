"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterDarkBottom({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="dark-bottom-footer" tag="div">
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Row
          className="footer-row-bottom"
          tag="div"
          columns={{
            main: "3|3|3|3",
          }}
        >
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="small-footer-title" tag="div">
              {"About us"}
            </_Builtin.Block>
            <_Builtin.Paragraph>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi qui."
              }
            </_Builtin.Paragraph>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="small-footer-title" tag="div">
              {"Our products"}
            </_Builtin.Block>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Our Portfolio"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"About our Services"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Featured Products"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Recently released"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="small-footer-title" tag="div">
              {"Useful links"}
            </_Builtin.Block>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Contact us"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"FAQs"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Support Center"}
            </_Builtin.Link>
            <_Builtin.Link
              className="dark-footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Our Portfolio"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column last" tag="div">
            <_Builtin.Block className="small-footer-title" tag="div">
              {"Get in touch"}
            </_Builtin.Block>
            <_Builtin.Paragraph>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis."
              }
            </_Builtin.Paragraph>
          </_Builtin.Column>
        </_Builtin.Row>
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
              href: "#",
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
    </_Component>
  );
}
