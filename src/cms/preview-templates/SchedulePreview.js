import React from "react";
import Agenda from "../../components/agenda";

export default ({ entry }) => {
  return <Agenda schedule={entry.getIn(["data", "schedule"]).toJS()} />;
};
