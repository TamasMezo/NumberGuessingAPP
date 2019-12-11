import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10 //replaces marginBottom and TOP
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "#666666",
    shadowOffset: {
      width: 0.5,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
