import React from "react";
import Speakers from "../../components/speakers";

export default ({ entry }) => {
  console.log(entry.toJS());

  return <Speakers speakers={entry.getIn(["data", "speakers"]).toJS()} />;
};
