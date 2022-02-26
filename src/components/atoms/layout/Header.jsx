import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const Header = () => {
  const context = useContext(UserContext);
  const { contextName } = context;

  return (
    <StyledDiv>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/users">USER</StyledLink>
      <p>{`ユーザー名：${contextName}`}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 70px;
  background-color: #1199aa;
  text-align: center;
  padding: 8px 0px;
`;

const StyledLink = styled(Link)`
  margin: 0px 8px;
`;
