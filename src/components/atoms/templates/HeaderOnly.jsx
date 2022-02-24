import { Header } from "../layout/Header";

export const HeaderOnly = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  );
};
