import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/atoms/templates/DefaultLayout";
import { HeaderOnly } from "./components/atoms/templates/HeaderOnly";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";
export default function App() {
  const user = {
    image: "https://source.unsplash.com/XBhIjVnRfvk",
    name: "テスト　太郎",
    tel: "000-0000-0000",
    company: {
      name: "○○株式会社aaaaaaaaaaaaaaa",
      url: "http://localhost/aaaaaaa/com"
    }
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
