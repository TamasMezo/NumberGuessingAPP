import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableButton,
  Alert,
  Button,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import Colors from "../constans/colors";
import numbersPic from "../assets/numbers.jpg";

const WelcomeScreen = props => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const emailAddressHandler = emailAddress => {
    setEmailAddress(emailAddress);
  };

  const passwordHandler = password => {
    setPassword(password);
  };

  const validateInputFields = () => {
    console.log("emailAddress", emailAddress);
    console.log("password", password);
    const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailAddress.length < 5 || password.length < 3) {
      return Alert.alert("Invalid values", "Please enter valid inputs!");
    } else if (mailFormat.test(emailAddress) === false) {
      return Alert.alert("Invalid email", "Please check your email address!");
    } else {
      props.onSignIn(emailAddress);
    }
  };

  return (
    <ImageBackground
      source={numbersPic}
      style={{
        width: "100%",
        height: "103%"
      }}
    >
      <View style={styles.screen}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          keyboardVerticalOffset={10}
        >
          <View style={styles.uiContainer}>
            <Text style={styles.title}>
              Welcome to the Magnificent Number Guessing App!
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={emailAddressHandler}
                value={emailAddress}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={passwordHandler}
              ></TextInput>
              <Button
                title="Sign in"
                style={styles.button}
                onPress={validateInputFields}
              />
            </View>
            <Text style={styles.signUpText}>
              You are not registered? Then click
              <Text style={styles.signUp}>SIGN UP</Text>!
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  uiContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 60
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    height: 50,
    color: "#fff",
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10
  },
  button: {
    width: "20%",
    backgroundColor: "yellow"
  },
  signUpText: {
    color: "#fff",
    marginTop: 20
  },
  signUp: {
    color: Colors.primary
  }
});

export default WelcomeScreen;
