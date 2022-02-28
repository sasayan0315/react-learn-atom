import { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const userInfo = useRecoilValue(userState);
  const { isAdmin } = userInfo ? userInfo : false;

  return (
    <StyledDiv>
      <StyledImg height={160} src={image} alt={name} />
      <StyledNameLabel>{name}</StyledNameLabel>
      {isAdmin && <button>Edit</button>}
    </StyledDiv>
  );
});

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  border-radius: 10px;
`;

const StyledNameLabel = styled.p`
  color: white;
`;
