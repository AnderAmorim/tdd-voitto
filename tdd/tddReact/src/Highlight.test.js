import HightLight from './HightLight'
import {render, screen} from '@testing-library/react'

test("renders a value", () => {
  const value = "3000";
  render(<HightLight value={value} />);
  expect(screen.getByText(value)).toBeInTheDocument();
});

test("renders another value", () => {
  const value = "5000";
  render(<HightLight value={value} />);
  expect(screen.getByText(value)).toBeInTheDocument();
});