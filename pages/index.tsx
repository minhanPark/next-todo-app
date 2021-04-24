import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>Hello Running</h1>
      <h1>Hello Water</h1>
      <p>sss</p>
      <a>sdsdsd</a>
      <span>aaaaaaaa</span>
    </Container>
  );
};

export default index;
