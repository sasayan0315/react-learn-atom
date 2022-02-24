import styled from "styled-components";

export const TextInput = (props) => {
  const { placeholder } = props;
  return <StyledTextInput placeholder={placeholder}></StyledTextInput>;
};
export const StyledTextInput = styled.input`
  border-radius: 999px;
  padding: 6px 6px;
  border: solid #ddd 1px;
`;
