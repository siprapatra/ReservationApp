import React, { Component } from "react";
import { View } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { Mutation, ApolloProvider } from "react-apollo";
import { createReservation } from "../../graphQL/createReservation";
import { reservationList } from "../../graphQL/reservationList";
import client from "./../../../apolloClient";

export default class CreateReservationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hotelName: "",
      departDate: "",
      arrivalDate: ""
    };
  }

  onTextChange = (text, type) => {
    switch (type) {
      case "name":
        this.setState({
          name: text
        });
        break;
      case "hotelName":
        this.setState({
          hotelName: text
        });
        break;
      case "departDate":
        this.setState({
          departDate: text
        });
        break;
      case "arrivalDate":
        this.setState({
          arrivalDate: text
        });
        break;
    }
  };

  isValid() {
    const { name, hotelName, arrivalDate, departDate } = this.state;
    if (name.trim().length == 0) {
      alert("Please Enter Name");
      return false;
    }
    if (hotelName.trim().length == 0) {
      alert("Please Enter Hotel Name");
      return false;
    }
    if (departDate.trim().length == 0) {
      alert("Please Enter Departure Name");
      return false;
    }
    if (arrivalDate.trim().length == 0) {
      alert("Please Enter Arrival Name");
      return false;
    }
    return true;
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Mutation
          mutation={createReservation}
          refetchQueries={[{ query: reservationList }]}
        >
          {(createReservation, { data, loading, error }) => (
            <View>
              <CustomTextInput
                hint="Enter your name"
                type="name"
                onTextChange={this.onTextChange}
                value={this.state.name}
              />
              <CustomTextInput
                hint="Enter your hotel name"
                type="hotelName"
                onTextChange={this.onTextChange}
                value={this.state.hotelName}
              />
              <CustomTextInput
                hint="Enter your departure date"
                type="departDate"
                onTextChange={this.onTextChange}
                value={this.state.departDate}
              />
              <CustomTextInput
                hint="Enter your arrival date"
                type="arrivalDate"
                onTextChange={this.onTextChange}
                value={this.state.arrivalDate}
              />
              <CustomButton
                text="Create"
                onButtonClick={() => {
                  if (this.isValid()) {
                    createReservation({
                      variables: {
                        name: this.state.name,
                        hotelName: this.state.hotelName,
                        arrivalDate: this.state.arrivalDate,
                        departureDate: this.state.departDate
                      }
                    })
                      .then(res => {
                        this.props.navigation.navigate("ReservationListScreen");
                        return res;
                      })
                      .catch(err =>
                        alert(
                          "Please check your internet connection" +
                            JSON.stringify(err)
                        )
                      );
                  }
                }}
              />
            </View>
          )}
        </Mutation>
      </ApolloProvider>
    );
  }
}
