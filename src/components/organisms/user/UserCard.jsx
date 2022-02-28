import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card.jsx";
import { UserIconWithName } from "../../molecules/user/UserIconWithName.jsx";

export const UserCard = memo((props) => {
  const { image, name, tel, company } = props.user;
  const { isAdmin } = props;

  return (
    <>
      <Card>
        <UserIconWithName image={image} name={name} isAdmin={isAdmin} />
        <StyledDl>
          <dt>電話番号</dt>
          <dd>{tel}</dd>
          <dt>URL</dt>
          <dd>{company.url}</dd>
          <dt>会社</dt>
          <dd>{company.name}</dd>
        </StyledDl>
      </Card>
    </>
  );
});

const StyledDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
