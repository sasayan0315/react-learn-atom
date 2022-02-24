import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="">USER</StyledLink>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 50px;
  background-color: #1199aa;
  text-align: center;
  padding: 8px 0px;
`;

const StyledLink = styled(Link)`
  margin: 0px 8px;
`;
