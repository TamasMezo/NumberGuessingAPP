import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ImageBackground
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import whiteBg from "../assets/whiteBg.jpg";
import Colors from "../constans/colors";
import Defaultstyles from "../constans/default-styles";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);

  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoise) ||
      (direction === "greater" && currentGuess > props.userChoise)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(curRoundes => curRoundes + 1);
  };

  return (
    <ImageBackground
      source={whiteBg}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={Defaultstyles.bodyText}>Opponent's Guess</Text>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={nextGuessHandler.bind(this, "lower")}
            color={Colors.secondary}
          />
          <Button
            title="Greater"
            onPress={nextGuessHandler.bind(this, "greater")}
            color={Colors.primary}
          />
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  titleContainer: {
    marginTop: 80
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
