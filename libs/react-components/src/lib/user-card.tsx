import styled from "@emotion/styled";
import { SizeMap, Sizes, SIZES, User } from "@kudos/kudos-types";

const Text = styled.p<{ size?: Sizes; color?: string }>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
  font-weight: normal;
`;

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
