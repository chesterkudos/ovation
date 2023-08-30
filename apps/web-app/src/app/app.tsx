import styled from "@emotion/styled";

import NxWelcome from "./nx-welcome";
import { ReactComponents } from "@kudos/react-components";

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #cedcd1;
  align-content: stretch;
`;

export function App() {
  return (
    <MainAppContainer>
      <ReactComponents /> {/* could be a header component */}
      <NxWelcome title="kudos web-app" />
    </MainAppContainer>
  );
}

export default App;
