import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <StyledDiv>footer text</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: #1199aa;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 8px 0px;
`;
