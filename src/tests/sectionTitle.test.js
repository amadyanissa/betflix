import SectionTitle from "../components/atoms/sectionTitle"
import React from "react"
import renderer from "react-test-renderer"

test('Renders Correctly', () => {
  const tree = renderer
                .create(<SectionTitle title={"Test"} link="/" />)
                .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree)
})