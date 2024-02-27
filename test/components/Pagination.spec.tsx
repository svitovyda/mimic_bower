import { Pagination } from "../../src/components/Pagination";
import { render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";

describe("Pagination", () => {
  it("renders without error for initial data", () => {
    const component = render(<Pagination currentPage={1} totalPages={0} navigateToPage={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it("renders without error for invalid data", () => {
    const component = render(<Pagination currentPage={-1} totalPages={-10} navigateToPage={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it("renders without error for valid data", () => {
    const component = render(<Pagination currentPage={5} totalPages={10} navigateToPage={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it("renders last page", () => {
    const component = render(<Pagination currentPage={10} totalPages={10} navigateToPage={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});
