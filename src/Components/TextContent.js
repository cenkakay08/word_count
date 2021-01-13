import React from "react";
import styled from "styled-components";

const TextContent = ({ textItself, textInfo }) => {
  return (
    <React.Fragment>
      <TextItselfdiv>
        <pre>{textItself}</pre>
      </TextItselfdiv>
      <TextInfodiv>
        <pre>{textInfo}</pre>
      </TextInfodiv>
    </React.Fragment>
  );
};

const TextItselfdiv = styled.div`
  height: 55vh;
  width: 33vw;
  top: 42vh;
  overflow: auto;
  position: absolute;
  font-weight: bold;
  font-size: 1vw;
  background-color: #fafafa;
  font-family: Arial, sans-serif;
  border: 1px solid;
  display: inline;
  left: 3vw;
  box-shadow: 5px 10px 8px 10px #888888;
`;
const TextInfodiv = styled.div`
  height: 10vh;
  width: 33vw;
  top: 55vh;
  overflow: auto;
  margin: auto;
  text-align: center;
  font-size: 2vw;
  font-weight: bold;
  background-color: #fafafa;
  position: absolute;
  font-family: Arial, sans-serif;
  border: 1px solid;
  display: inline;
  right: 3vw;
  box-shadow: 5px 10px 8px 10px #888888;
`;

export default TextContent;
