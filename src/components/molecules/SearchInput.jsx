import styled from "styled-components";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { TextInput } from "../atoms/input/TextInput";

export const SearchInput = () => {
  return (
    <>
      <div>
        <StyledContainer>
          <TextInput placeholder="検索条件を入力"></TextInput>
          <StyledButtonWrapper>
            <SecondaryButton>検索</SecondaryButton>
          </StyledButtonWrapper>
        </StyledContainer>
      </div>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButtonWrapper = styled.div`
  padding-left: 10px;
`;
