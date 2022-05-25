import React from "react";
import { shallow } from "enzyme";

import Settings from "../Pages/Settings";

describe("Settings component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Settings />);
    wrapper.unmount();
  });
});
