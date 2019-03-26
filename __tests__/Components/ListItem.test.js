import React from "react";
import renderer from "react-test-renderer";
import ListItem from "../../src/components/ListItem";

var item = {
  name: "Test",
  hotelName: "Test Hotel",
  departureDate: "20 Mar 2019",
  arrivalDate: "22 Mar 2019"
};
describe("Test for ListItem", () => {
  test("should render the Listitem", () => {
    const snap = renderer
      .create(
        <ListItem
          item={item}
          onItemClick={() => {
            console.log("item clicked");
          }}
        />
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
