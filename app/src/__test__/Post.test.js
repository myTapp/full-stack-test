import React from "react";
import { shallow } from "enzyme";
import Post from "../component/Post";

describe(" Testing Post Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.length).toBe(1);
    wrapper.setProps({
      votes: 7,
      description: "Testing",
      title: "Test Title",
      postId: 1
    });
  });
});
