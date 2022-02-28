import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);

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
