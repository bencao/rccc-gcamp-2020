import React from "react";
import Speakers from "../../components/speakers";

export default ({ entry }) => {
  return <Speakers speakers={entry.getIn(["data", "speakers"]).toJS()} />;
};
