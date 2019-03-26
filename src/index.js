import { createStackNavigator, createAppContainer } from "react-navigation";
import ReservationListScreen from "./containers/ReservationListScreen";
import CreateReservationScreen from "./containers/CreateReservationScreen";
import ReservationDetails from "./containers/ReservationDetails";

const commonOption = {
  headerTintColor: "black",
  headerStyle: {
    backgroundColor: "#f4511e"
  }
};

const AppNavigator = createStackNavigator({
  ReservationListScreen: {
    screen: ReservationListScreen,
    navigationOptions: {
      title: "Reservations",
      ...commonOption
    }
  },
  CreateReservationScreen: {
    screen: CreateReservationScreen,
    navigationOptions: {
      title: "Create Reservation",
      ...commonOption
    }
  },
  ReservationDetails: {
    screen: ReservationDetails,
    navigationOptions: {
      title: "Reservation Details",
      ...commonOption
    }
  }
});

export default createAppContainer(AppNavigator);
