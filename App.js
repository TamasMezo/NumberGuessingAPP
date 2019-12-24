import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGameRounds] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGameRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGameRounds(numOfRounds);
  };

  const startNewGame = () => {
    setGameRounds(0);
    setUserNumber(0);
  };

  const signinHandler = emailAddress => {
    setUserEmail(emailAddress);
    console.log("signedIN");
  };

  //let content = <WelcomeScreen onSignIn={signinHandler} />;
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  let header = null;

  if (userEmail && userEmail.length > 5) {
    content = <StartGameScreen onStartGame={startGameHandler} />;
    header = <Header title="Guess a Number" />;
  }

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
    header = <Header title="Guess a Number" />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestart={startNewGame}
      />
    );
    header = <Header title="Guess a Number" />;
  }

  return (
    <View style={styles.screen}>
      {header}
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
