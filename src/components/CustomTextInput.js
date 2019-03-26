import React from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CustomTextInput = ({ hint, onTextChange, type, value }) => (
  <TextInput
    placeholder={hint}
    style={styles.itemTextInput}
    value={value}
    onChangeText={text => onTextChange(text, type)}
  />
);

CustomTextInput.propTypes = {
  hint: PropTypes.string,
  onTextChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

CustomTextInput.defaultProps = {
  hint: "",
  onTextChange: () => {},
  type: "",
  value: ""
};

const styles = StyleSheet.create({
  itemTextInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: 50,
    fontSize: 17,
    color: "black"
  }
});

export default CustomTextInput;
