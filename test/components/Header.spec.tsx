import { Header } from "../../src/components/Header";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Header", () => {
  it("renders without error", () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
