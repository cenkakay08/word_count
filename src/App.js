import Title from "./Components/Title";
import { DropZone } from "./Components/DropZone";

import React from "react";
import styled from "styled-components";

const WordCountApp = () => {
  return (
    <WrapperAll>
      <React.Fragment>
        <Title />
        <DropZone />
      </React.Fragment>
    </WrapperAll>
  );
};

const WrapperAll = styled.section`
  background: #e7e7de;
  height: 100vh;
  width: 100vw;
  * {
    margin: 0;
    padding: 0;
  }
`;
export default WordCountApp;
