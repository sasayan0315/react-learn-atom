import { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const context = useContext(UserContext);
  const { setUserInfo } = context;
  const onClickAdmin = useCallback(() => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  }, [setUserInfo, history]);
  const onClickNormal = useCallback(() => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  }, [setUserInfo, history]);

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
