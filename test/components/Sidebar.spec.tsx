import { Sidebar } from "../../src/components/Sidebar";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Sidebar", () => {
  it("renders without error", () => {
    const component = render(<Sidebar />);

    expect(component).toMatchSnapshot();
  });
});
