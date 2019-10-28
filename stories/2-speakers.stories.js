import React from "react";
import { action } from "@storybook/addon-actions";
import Speakers from "../src/components/speakers";

import { speakers as SPEAKERS } from "../src/data/speakers";

export default {
  component: Speakers,
  title: "Speakers"
};

export const empty = () => <Speakers speakers={[]} />;

export const simple = () => (
  <Speakers
    speakers={[
      {
        name: "Bobby",
        description: "Bobby is a lovely boy",
        avatarUrl: "https://placekitten.com/200/300"
      }
    ]}
  />
);

export const real = () => <Speakers speakers={SPEAKERS} />;
