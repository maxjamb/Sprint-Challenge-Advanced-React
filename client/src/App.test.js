import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
