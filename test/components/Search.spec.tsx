import { Search } from "../../src/components/Search";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Search", () => {
  it("renders without error", () => {
    const component = render(<Search onQueryChanged={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});
