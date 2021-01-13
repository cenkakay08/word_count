import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <WrapperTitle>
      <TitleText>Word Count!</TitleText>
    </WrapperTitle>
  );
};
const TitleText = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #ffd369;
  font-weight: bold;
`;
const WrapperTitle = styled.section`
  background: #008891;
`;
export default Title;
