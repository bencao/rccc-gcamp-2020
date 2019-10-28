import React from "react";
import styled from "styled-components";

const Main = styled.main`
  padding-top: 64px;
  & > * {
    margin-bottom: 1em;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: "0",
          width: "100%",
          height: "100%"
        }}
      >
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
