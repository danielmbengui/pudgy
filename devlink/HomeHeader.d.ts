import * as React from "react";
import * as Types from "./types";

declare function HomeHeader(props: {
  as?: React.ElementType;
  videoHeaderBack?: Types.Devlink.Slot;
  titleHome?: React.ReactNode;
  subtitleHome?: React.ReactNode;
}): React.JSX.Element;
