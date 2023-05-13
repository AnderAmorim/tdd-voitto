import ReactDOM from "react-dom";
import Highlight from "./Highlight";

test("renders a value", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(<Highlight />, container);

  expect(document.body.textContent).toBe("3000");
});