import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

/*

// Basic jest test(uses enzyme) using dummy data

// Component test cases

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Funtional test cases

describe("addition of two numbers", () => {
  it("2+2=4", () => {
    expect(2 + 2).toBe(10);
  });
});
*/

/*

// Basic jest test(uses enzyme) using actual and expected data
// funtional test cases

describe("App Component", () => {
  it("starts with a count 0", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 0");
  });
  it("increments count by 1 when the increment button is clicked", () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 1");
  });
  it("decrements count by 1 when the decrement button is clicked", () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find("button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: -1");
  });
});
*/

// Testing React components with snapshots(returns the tree(JSON format of component) and compares the changes)
// Using 'npm react-test-renderer'
// In case we intensionally changes the component, press 'U' to update the snapshot

it("matches the snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
