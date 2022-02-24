import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  border: solid #080 5px;
  width: 280px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  background-color: #0a0;
  box-shadow: #080 0px 0px 4px 2px;
`;
