import React, { Component } from "react";
import { Text, View, ActivityIndicator, FlatList, Button } from "react-native";
import { ApolloProvider, Query } from "react-apollo";
import client from "./../../../apolloClient";
import { reservationList } from "../../graphQL/reservationList";
import ListItem from "../../components/ListItem";
import CustomButton from "../../components/CustomButton";
import styles from "./styles";

const ReservationList = ({ onItemClick }) => (
  <Query query={reservationList}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <View style={styles.loadingView}>
            <ActivityIndicator size="small" />
          </View>
        );
      if (error)
        return (
          <View style={styles.loadingView}>
            <Text>Please check your internet connection</Text>
          </View>
        );
      return (
        <FlatList
          data={data.reservations}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem item={item} onItemClick={onItemClick} />
          )}
          keyExtractor={item => item.id}
        />
      );
    }}
  </Query>
);

export default class ReservationListScreen extends Component {
  onItemClick = item => {
    this.props.navigation.navigate("ReservationDetails", {
      id: item.id
    });
  };
  onButtonClick = () => {
    this.props.navigation.navigate("CreateReservationScreen");
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.mainContainer}>
          <ReservationList onItemClick={this.onItemClick} />
        </View>
        <CustomButton
          text="Create Reservation"
          onButtonClick={this.onButtonClick}
        />
      </ApolloProvider>
    );
  }
}
