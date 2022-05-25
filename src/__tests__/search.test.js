import React from "react";
import { shallow } from "enzyme";
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import Serch from "../Components/Search";

describe("Search component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Serch />
      </Provider>
    );
    wrapper.unmount();
  });
});
