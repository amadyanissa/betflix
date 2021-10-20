import RecommendationPane from "../components/atoms/recommendation-pane"
import React from "react"
import renderer from "react-test-renderer"
import TestRenderer from "react-test-renderer"
// import { act } from "react-dom/test-utils";
test('Renders Correctly', () => {
  const tree = renderer
              .create(<RecommendationPane title={"Test"} poster={"/"} year={2000} id={"tta109810"}/>)
              .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[0].props.src).toBe("/");
  expect(tree.children[1].children[0].children[0]).toBe("Test");
})


test('change style on hover', () => {
    const {act} = TestRenderer

  const component = renderer
              .create(<RecommendationPane title={"Test"} poster={"/"} year={2000} id={"tta109810"}/>)
  var tree = component.toJSON()

  act(async () => {
    await tree.props.onMouseEnter();
    tree = await component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})