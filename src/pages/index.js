import React from "react";
import IndexTemplate from "../templates/index";

export default ({ data }) => (
  <IndexTemplate logoImage={data.logoImage.childImageSharp.fixed} />
);

export const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
