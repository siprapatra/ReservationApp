import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const ListItem = ({ item, onItemClick }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => onItemClick(item)}
  >
    <Text style={styles.itemText}>Name: {item.name}</Text>
    <Text style={styles.itemText}>Hotel Name: {item.hotelName}</Text>
    <Text style={styles.itemText}>Departure Date: {item.departureDate}</Text>
    <Text style={styles.itemText}>Arrival Date: {item.arrivalDate}</Text>
  </TouchableOpacity>
);

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  onItemClick: PropTypes.func
};

ListItem.defaultProps = {
  onItemClick: () => {}
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
    marginHorizontal: 8,
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  },
  itemText: {
    fontSize: 16,
    color: "black"
  }
});

export default ListItem;
