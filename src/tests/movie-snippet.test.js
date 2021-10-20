import MovieSnippet from "../components/molecules/movie-snippet"
import React from "react"
import renderer from "react-test-renderer"
import TestRenderer from "react-test-renderer"
// import { act } from "react-dom/test-utils";
test('Renders Correctly', () => {
  const tree = renderer
              .create(<MovieSnippet name={"Test"} poster={"/"} year={2000} imdbId={"tta109810"}/>)
              .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[1].children[0].type).toBe('span')
  expect(tree.children[1].children[0].children[0]).toBe('Test')
})


test('change style on hover', () => {
  const component = renderer
              .create(<MovieSnippet name={"Test"} poster={"/"} year={2000} imdbId={"tta109810"}/>)
  var tree = component.toJSON()
  
  const {act} = TestRenderer

  expect(tree.children[1].props.className).toBe("")
  act(async () => {
    await tree.props.onMouseEnter();
    tree = await component.toJSON();
    expect(tree.children[1].props.className).toBe("hover")
  })
})