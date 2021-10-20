import LabeledInfo from "../components/molecules/labeled-info"
import React from "react"
import renderer from "react-test-renderer"

test('Renders Correctly', () => {
  const tree = renderer
              .create(<LabeledInfo data={"Passed"} title={"Test"} />)
              .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[1].type).toBe('span')
  expect(tree.children[1].children[0]).toBe('Passed')
  expect(tree.children[0].props.className).toBe('title')
  expect(tree.children[0].type).toBe('span')
  expect(tree.children[0].children[0]).toBe('Test')
})
