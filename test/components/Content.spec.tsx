import { Content } from "../../src/components/Content";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Content", () => {
  it("renders without error", () => {
    const component = render(<Content query="" />);

    expect(component).toMatchSnapshot();
  });
});
