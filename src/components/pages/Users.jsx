import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const { isAdmin } = userInfo ? userInfo : false;
  console.log(userInfo);

  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      image: "https://source.unsplash.com/XBhIjVnRfvk",
      name: `テスト　太郎 No ${val}`,
      tel: "000-0000-0000",
      company: {
        name: "○○株式会社aaaaaaaaaaaaaaa",
        url: "http://localhost/aaaaaaa/com"
      }
    };
  });

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: userInfo ? !userInfo.isAdmin : false });
  };

  return (
    <>
      <SContainer>
        <h2>USER PAGE</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <SUserArea>
          {users.map((val) => {
            return <UserCard key={val.id} user={val} isAdmin={isAdmin} />;
          })}
        </SUserArea>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
