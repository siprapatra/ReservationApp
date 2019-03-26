import React from "react";
import renderer from "react-test-renderer";
import CustomTextInput from "../../src/components/CustomTextInput";

describe("Test for Custom textinput", () => {
  test("should render the textinput", () => {
    const snap = renderer
      .create(
        <CustomTextInput
          hint="Enter your arrival date"
          type="some type"
          onTextChange={(text)=>console.log(text)}
        />
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
  test("should render the textinput without props", () => {
    const snap = renderer
      .create(
        <CustomTextInput
        />
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
