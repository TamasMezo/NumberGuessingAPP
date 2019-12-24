import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard, //API
  Alert, //API,
  Dimensions, //API
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import Card from "../components/Card";
import Colors from "../constans/colors";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import whiteBg from "../assets/whiteBg.jpg";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmedStatus] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  //94
  useEffect(() => {
    const changeLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", changeLayout);
    return () => {
      Dimensions.removeEventListener("change", changeLayout);
    };
  });

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmedStatus(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1-99.",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmedStatus(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={1}>
        <ImageBackground
          source={whiteBg}
          style={{
            width:
              Dimensions.get("window").width > 500
                ? Dimensions.get("window").width * 2
                : Dimensions.get("window").width,
            height: Dimensions.get("window").height * 1.06
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.screen}>
              <Text style={styles.title}>Place your bet! </Text>
              <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={2}
                  openTheKeyboard={true}
                  onChangeText={numberInputHandler}
                  value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                  <View style={{ width: buttonWidth }}>
                    <Button
                      title="Reset"
                      onPress={resetInputHandler}
                      color={Colors.secondary}
                    />
                  </View>
                  <View style={{ width: buttonWidth }}>
                    <Button
                      title="Confirm"
                      onPress={confirmInputHandler}
                      color={Colors.primary}
                    />
                  </View>
                </View>
              </Card>
              {confirmedOutput}
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  title: {
    fontSize: 20,
    marginVertical: 10 //replaces marginBottom and TOP
  },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    maxWidth: "90%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  /*  button: {
    //width: 100
    width: Dimensions.get("window").width / 4
  }, */
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
