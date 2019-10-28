import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

export default ({ data }) => (
  <Layout>
    <SEO title="生之追寻2020" description="生之追寻2020" />
    <Navigation current="about" />
    <p>TODO About</p>
  </Layout>
);
