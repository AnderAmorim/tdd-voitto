import {render} from '@testing-library/react'
import Highlight from "./Highlight";

test("renders a value", () => {
  const value = "3000";
  render(<Highlight value={value} />);
  expect(screen.getByText(value)).toBeInTheDocument();
});

test("renders a value", () => {
  const value = "5000";
  render(<Highlight value={value} />);
  expect(screen.getByText(value)).toBeInTheDocument();
});