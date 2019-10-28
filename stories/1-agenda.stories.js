import React from "react";
import { action } from "@storybook/addon-actions";
import Agenda from "../src/components/agenda";

import { schedule as SCHEDULE } from "../src/data/schedule";

export default {
  component: Agenda,
  title: "Agenda"
};

export const empty = () => <Agenda schedule={[]} />;

export const simple = () => (
  <Agenda
    schedule={[
      {
        date: "05/01",
        morning: "Activity 1",
        afternoon: "Activity 2",
        evening: "Activity 3"
      }
    ]}
  />
);

export const real = () => <Agenda schedule={SCHEDULE} />;
