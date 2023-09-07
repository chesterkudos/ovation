import { render } from "@testing-library/react";

import Header from "./Header";

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
