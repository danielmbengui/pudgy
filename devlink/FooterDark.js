"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterDark({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="footer"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container footer-container" tag="div">
        <_Builtin.Row
          className="footer-row block"
          tag="div"
          columns={{
            main: "3|3|3|3",
          }}
        >
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="footer-title" tag="div">
              {"About us"}
            </_Builtin.Block>
            <_Builtin.Paragraph className="footer-paragraph">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi qui."
              }
            </_Builtin.Paragraph>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="footer-title" tag="div">
              {"Links"}
            </_Builtin.Block>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Our Product"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Company History"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Meet the Team"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Other Services"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column" tag="div">
            <_Builtin.Block className="footer-title" tag="div">
              {"Follow us"}
            </_Builtin.Block>
            <_Builtin.Link
              className="footer-link social"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Facebook"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link social twitter"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Twitter"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link social google"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Google Plus"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link social youtube"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"YouTube"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column className="footer-column last" tag="div">
            <_Builtin.Block className="footer-title" tag="div">
              {"Support"}
            </_Builtin.Block>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"FAQs"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Support Desk"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Contact us"}
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Our Office"}
            </_Builtin.Link>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
      <_Builtin.Container className="container bottom-footer" tag="div">
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
    </_Component>
  );
}
