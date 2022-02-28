import { memo } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = memo((props) => {
  const { children, onClick } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
});

const StyledButton = styled(BaseButton)`
  background-color: #44bb44;
  color: white;
  font-size: 30pt;
`;
