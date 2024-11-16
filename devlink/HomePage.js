"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavbarTransparent } from "./NavbarTransparent";
import { HomeHeader } from "./HomeHeader";
import { HomeHeaderDownload } from "./HomeHeaderDownload";
import { HomeServices } from "./HomeServices";
import { HomeServices1 } from "./HomeServices1";
import { HomePricing } from "./HomePricing";
import { HomePartners } from "./HomePartners";
import { HomePartners1 } from "./HomePartners1";
import { HomeContact } from "./HomeContact";
import { FooterBlack } from "./FooterBlack";

export function HomePage({
  as: _Component = _Builtin.Block,
  videoHeaderBack,
  componentLang,
  componentTheme,
  componentGoogleMap,
}) {
  return (
    <_Component className="block-home-page" tag="div">
      <NavbarTransparent
        componentLang={componentLang}
        componentTheme={componentTheme}
      />
      <HomeHeader videoHeaderBack={videoHeaderBack} />
      <HomeHeaderDownload />
      <HomeServices />
      <HomeServices1 />
      <HomePricing />
      <HomePartners />
      <HomePartners1 />
      <HomeContact componentGoogleMap={componentGoogleMap} />
      <FooterBlack />
    </_Component>
  );
}
