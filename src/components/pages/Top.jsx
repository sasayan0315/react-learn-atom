import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = useCallback(() => {
    history.push({ pathname: "/users", state: { isAdmin: true } });
  }, [history]);
  const onClickNormal = useCallback(() => {
    history.push({ pathname: "/users", state: { isAdmin: false } });
  }, [history]);

  return (
    <>
      <h1>TOP PAGE</h1>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickNormal}>Normal</SecondaryButton>
    </>
  );
};
