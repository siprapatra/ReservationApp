import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CustomButton = ({ text, onButtonClick }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => onButtonClick()}
  >
    <Text style={styles.itemText}>{text}</Text>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func
};

CustomButton.defaultProps = {
  text: "",
  onButtonClick: () => {}
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 17,
    color: "white"
  }
});

export default CustomButton;
