import React from "react";
import { shallow } from "enzyme";

import Home from "../pages/Home";

describe("Footer component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Home />);
    wrapper.unmount();
  });
});
