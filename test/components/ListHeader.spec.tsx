import { ListHeader } from "../../src/components/ListHeader";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("ListHeader", () => {
  it("renders without error", () => {
    const component = render(<ListHeader onSort={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});
