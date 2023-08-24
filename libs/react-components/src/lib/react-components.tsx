import styled from "@emotion/styled";

/* eslint-disable-next-line */
export interface ReactComponentsProps {}

const StyledReactComponents = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #ea8810;
  padding: 1rem;
`;

export function ReactComponents(props: ReactComponentsProps) {
  return (
    <StyledReactComponents>
      <h2>Component from React Library</h2>
    </StyledReactComponents>
  );
}

export default ReactComponents;
