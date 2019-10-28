import React from "react";
import IndexTemplate from "../templates/index";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

export default ({ data }) => (
  <Layout>
    <SEO title="生之追寻2020" description="生之追寻2020" />
    <Navigation current="index" />
    <IndexTemplate logoImage={data.logoImage.childImageSharp.fixed} />
  </Layout>
);

export const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 290, height: 290) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
