import LoadingText from "../components/atoms/loading-text"
import React from "react"
import renderer from "react-test-renderer"

test('Renders Correctly', () => {
  const tree = renderer
              .create(<LoadingText />)
              .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.type).toBe("h4");
  expect(tree.children[0]).toBe("Loading.....")
})
