import { Footer } from "../../src/components/Footer";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Footer", () => {
  it("renders without error", () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
