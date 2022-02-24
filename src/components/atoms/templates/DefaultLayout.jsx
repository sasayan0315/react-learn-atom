import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const DefaultLayout = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};
