import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <StyledDiv>
      <StyledImg height={160} src={image} alt={name} />
      <StyledNameLabel>{name}</StyledNameLabel>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  border-radius: 10px;
`;

const StyledNameLabel = styled.p`
  color: white;
`;
