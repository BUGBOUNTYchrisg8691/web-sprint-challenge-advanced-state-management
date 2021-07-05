import React from "react";
import { act, fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import logger from "redux-loger";
import * as actions from "./../store/actions";

import App from "./App";
import SmurfForm from "./SmurfForm";

describe("Test for stretch", () => {
  test("Render App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
