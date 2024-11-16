"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"91fbc518-0139-737f-494e-c127100e5356","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"91fbc518-0139-737f-494e-c127100e5356","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"PX","delay":350,"direction":"LEFT","effectIn":true},"createdOn":1731363864923},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"91fbc518-0139-737f-494e-c127100e536d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"91fbc518-0139-737f-494e-c127100e536d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":350,"direction":"RIGHT","effectIn":true},"createdOn":1731363899041},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-10"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"91fbc518-0139-737f-494e-c127100e535e"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":350,"direction":"BOTTOM","effectIn":true},"createdOn":1731716275921}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeHeaderDownload({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container home-intro-container" tag="div">
        <_Builtin.Block
          className="home-intro-wrapper left"
          data-w-id="91fbc518-0139-737f-494e-c127100e5356"
          macro={{
            guid: "ad565c00-16f4-3025-0197-62b3e400e505",
          }}
          tag="div"
          data-ix="fade-in-zoom"
        >
          <_Builtin.Block
            className="home-intro-link-block _3"
            tag="div"
            href="/homepages/home-iphone-app"
          >
            <_Builtin.Block className="intro-block-overlay right" tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className="intro-block-text-wrapper left" tag="div">
            <_Builtin.Block className="intro-block-title" tag="div">
              {"Iphone"}
            </_Builtin.Block>
            <_Builtin.Paragraph>
              {"Retrouves nous sur ta plateforme préférée, etc etc etc"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="home-intro-wrapper mid"
          data-w-id="91fbc518-0139-737f-494e-c127100e535e"
          macro={{
            guid: "45e1f7a0-1369-ad4e-42b1-a5ca4997234e",
          }}
          tag="div"
          data-ix="fade-in-zoom-3"
        >
          <_Builtin.Block
            className="home-intro-link-block _2"
            tag="div"
            href="/homepages/home-business-3"
          >
            <_Builtin.Block className="intro-block-overlay center" tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className="intro-block-text-wrapper mid" tag="div">
            <_Builtin.Block className="intro-block-title" tag="div">
              {"Mobile & Tablette"}
            </_Builtin.Block>
            <_Builtin.Paragraph className="paragraph-2">
              <_Builtin.Strong>{"Télécharge l'app"}</_Builtin.Strong>
              <_Builtin.Strong> </_Builtin.Strong>
              {"dès maintenant et organise facilement tes prochaines sorties."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block className="div-block-5" tag="div">
            <_Builtin.Image
              className="image-2"
              loading="lazy"
              width="auto"
              height="50"
              alt=""
              src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673486b317cb134f1a95162d_appstore.png"
            />
            <_Builtin.Image
              className="image-3"
              loading="lazy"
              width="Auto"
              height="55"
              alt=""
              src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673486bd3ec8a78bbe40de8c_google_play.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="home-intro-wrapper right"
          data-w-id="91fbc518-0139-737f-494e-c127100e536d"
          macro={{
            guid: "2962e800-3be3-3c67-6863-d36cae1f0107",
          }}
          tag="div"
          data-ix="fade-in-zoom-2"
        >
          <_Builtin.Block
            className="home-intro-link-block _1"
            tag="div"
            href="/homepages/home-business-2"
          >
            <_Builtin.Block className="intro-block-overlay left" tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className="intro-block-text-wrapper last" tag="div">
            <_Builtin.Block className="intro-block-title" tag="div">
              {"Samsung"}
            </_Builtin.Block>
            <_Builtin.Paragraph>
              {"Retrouves nous sur ta plateforme préférée, etc etc etc"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
