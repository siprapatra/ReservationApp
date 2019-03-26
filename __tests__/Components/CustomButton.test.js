import React from "react";
import renderer from "react-test-renderer";
import CustomButton from "../../src/components/CustomButton";

describe("Test for Custom Button", () => {
  test("should render the button", () => {
    const snap = renderer
      .create(
        <CustomButton
          text="My Button"
          onItonButtonClickemClick={() => {
            console.log("button clicked");
          }}
        />
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
  test("should render the button without props", () => {
    const snap = renderer.create(<CustomButton />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
