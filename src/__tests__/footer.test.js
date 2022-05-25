import React from "react";
import { shallow } from "enzyme";

import Footer from "../Components/Footer";

describe("Footer component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Footer />);
    wrapper.unmount();
  });
});
