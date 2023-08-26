import styled from "@emotion/styled";
import { SIZES, User } from "@kudos/kudos-types";
import { Text } from "@kudos/kudos-styled";

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #63119e;
  padding: 1rem;
`;

export const UserCard = ({ name, access }: User) => (
  <UserContainer>
    <Text color="#fff">{name}</Text>
    <Text color="#fff" size={SIZES.S}>
      {access}
    </Text>
  </UserContainer>
);

export default UserCard;
