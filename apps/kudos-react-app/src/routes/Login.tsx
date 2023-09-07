import styled from "@emotion/styled";
import { Text } from "@kudos/kudos-styled";
import axios from "axios";
import { useQuery } from "react-query";

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-content: stretch;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

type BasicResponse = {
  data: object;
};

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:";

const axiosPost = async () =>
  await axios.post(`//${BASE_URL}/identity/passwords/login`, {
    email: "test+admin@kudos.com",
    password: "IWant2Believe!",
  });

export const Login = () => {
  const { data, error, isLoading } = useQuery<BasicResponse>({
    queryKey: ["login"],
    queryFn: axiosPost,
  });

  console.log({ data, error, isLoading });

  return (
    <MainAppContainer>
      <h2>Login Page</h2>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <StyledForm>
            <Stack>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </Stack>
            <Stack>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </Stack>
            <Stack>
              <button type="submit">Login</button>
            </Stack>
          </StyledForm>
          <pre>{JSON.stringify(data?.data ?? {}, null, 2)}</pre>
        </>
      )}
    </MainAppContainer>
  );
};

export default Login;
