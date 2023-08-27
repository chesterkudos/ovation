import { render } from "@testing-library/react";

import Header from "./header";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Header>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Pear</li>
        </ul>
      </Header>
    );
    expect(baseElement).toBeTruthy();
  });
});
