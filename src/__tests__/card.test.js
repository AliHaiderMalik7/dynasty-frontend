import React from "react";
import { shallow } from "enzyme";

import Card from "../Components/Card";

describe("Card component", () => {
  it("mounts without crashing", () => {
    const data = {
      picture: "https://randomuser.me/api/portraits/men/91.jpg",
      name: {
        first: "Ali",
        last: "Malik",
      },
      login: {
        username: "Aly7",
        password: "alsjds",
      },
    };
    const wrapper = shallow(<Card data={data} />);
    wrapper.unmount();
  });
});
