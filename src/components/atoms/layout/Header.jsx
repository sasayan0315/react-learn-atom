import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const Header = () => {
  const userInfo = useRecoilValue(userState);
  const { isAdmin } = userInfo ? userInfo : false;
  console.log(userInfo);
  return (
    <StyledDiv>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/users">USER</StyledLink>
      <p>{isAdmin ? "管理者" : "通常"}</p>
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
