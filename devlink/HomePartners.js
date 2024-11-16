"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInRight","autoStopEventId":"e-12"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"d1aab649-7188-03d1-a7ee-fa84b17e3c0f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":150,"direction":"RIGHT","effectIn":true},"createdOn":1731716660022},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInLeft","autoStopEventId":"e-14"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"d1aab649-7188-03d1-a7ee-fa84b17e3c0d"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1731716710796},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInLeft","autoStopEventId":"e-16"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"d1aab649-7188-03d1-a7ee-fa84b17e3c0e"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":100,"direction":"LEFT","effectIn":true},"createdOn":1731716740768}},"actionLists":{"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomePartners({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section overflow-none building-1"
      grid={{
        type: "section",
      }}
      tag="div"
      id="section-partners"
    >
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Image
          className="home-mockup ipad"
          data-w-id="d1aab649-7188-03d1-a7ee-fa84b17e3c0d"
          macro={{
            guid: "a4f1a42b-514b-64d9-54bd-9221a66ebd6e",
          }}
          data-ix="mockup-fade-in"
          width="auto"
          height="auto"
          loading="auto"
          src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/67344654dc94b48f14e37868_welcome_page-portrait.webp"
        />
        <_Builtin.Image
          className="home-mockup iphone"
          data-w-id="d1aab649-7188-03d1-a7ee-fa84b17e3c0e"
          macro={{
            guid: "4021b8dc-da78-ed58-06e1-87bf30ee6718",
          }}
          data-ix="mockup-fade-in-2"
          width="auto"
          height="auto"
          loading="auto"
          src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/67327f6ad8cddf2be8482890_wellness_page-portrait.png"
        />
        <_Builtin.Image
          className="home-mockup"
          data-w-id="d1aab649-7188-03d1-a7ee-fa84b17e3c0f"
          macro={{
            guid: "1feb2333-02be-b13b-3f4f-f53fdcfabfa4",
          }}
          data-ix="mockup-move"
          width="auto"
          height="auto"
          loading="auto"
          src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/67344d9f3dd426d1ecf70cee_welcome_page-laptop-front-min.png"
        />
        <_Builtin.Row
          tag="div"
          columns={{
            main: "5|7",
          }}
        >
          <_Builtin.Column className="home-mockup-column" tag="div" />
          <_Builtin.Column
            className="info-column-right responsive pricing"
            tag="div"
          >
            <_Builtin.Block
              className="section-title-wrapper full pricing"
              tag="div"
            >
              <_Builtin.Heading className="section-title" tag="h2">
                {"Vous êtes un établissement? Faites équipe avec "}
                <_Builtin.Strong>{"Pudgy"}</_Builtin.Strong>
                {" dès maintenant !"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block className="long-feature-block" tag="div">
              <_Builtin.Image
                className="left-feature-icon"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3f4_Icon-responsive.png"
              />
              <_Builtin.Block className="long-feature-title" tag="div">
                {"Réponse rapide"}
              </_Builtin.Block>
              <_Builtin.Paragraph className="description-paragraph">
                {
                  "Contactez-nous facilement en un clic, et recevez une réponse sous 24h. Notre équipe est disponible pour discuter de vos besoins et de la meilleure façon de collaborer."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block className="long-feature-block" tag="div">
              <_Builtin.Image
                className="left-feature-icon"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3f2_Icon-customize.png"
              />
              <_Builtin.Block className="long-feature-title" tag="div">
                {"Personnalisation garantie"}
              </_Builtin.Block>
              <_Builtin.Paragraph className="description-paragraph">
                {
                  "Nous adaptons nos solutions à votre activité : vétérinaires, alimentation, dressage, restauration ou loisirs. Ensemble, nous construisons une collaboration sur mesure."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block className="long-feature-block" tag="div">
              <_Builtin.Image
                className="left-feature-icon"
                width="auto"
                height="auto"
                loading="auto"
                src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf3f2_Icon-customize.png"
              />
              <_Builtin.Block className="long-feature-title" tag="div">
                {"Visibilité optimale"}
              </_Builtin.Block>
              <_Builtin.Paragraph className="description-paragraph">
                {
                  "Faites partie de notre réseau et atteignez une audience engagée et active sur Pudgy. Mettez en avant vos services auprès de milliers d’utilisateurs chaque jour."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
