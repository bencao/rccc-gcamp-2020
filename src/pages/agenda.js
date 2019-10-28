import React from "react";
import Layout from "../components/layout";
import Agenda from "../components/agenda";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

import { schedule as SCHEDULE } from "../data/schedule.json";

export default ({ data }) => (
  <Layout>
    <SEO title="生之追寻2020" description="生之追寻2020" />
    <Navigation current="agenda" />
    <Agenda schedule={SCHEDULE} />

    <p>TODO More Agenda</p>
  </Layout>
);
