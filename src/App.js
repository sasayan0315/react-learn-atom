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
    <div>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
