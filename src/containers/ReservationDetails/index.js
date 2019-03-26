import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { ApolloProvider, Query } from "react-apollo";
import client from "./../../../apolloClient";
import { selectedReservation } from "../../graphQL/selectedReservation";
import styles from "./styles";
import ListItem from "../../components/ListItem";

const SelectedReservationComponent = ({ id }) => (
  <Query query={selectedReservation(id)}>
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
      return <ListItem item={data.reservation} />;
    }}
  </Query>
);

export default class ReservationDetails extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.mainContainer}>
          <SelectedReservationComponent
            id={this.props.navigation.getParam("id")}
          />
        </View>
      </ApolloProvider>
    );
  }
}
