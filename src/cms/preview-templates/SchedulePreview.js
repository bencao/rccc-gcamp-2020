import React from "react";
import Agenda from "../../components/agenda";

export default ({ entry }) => {
  console.log(entry.toJS());

  return <Agenda schedule={entry.getIn(["data", "schedule"]).toJS()} />;
};
