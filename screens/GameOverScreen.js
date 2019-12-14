import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import Colors from "../constans/colors";
import whiteBg from "../assets/whiteBg.jpg";
import Card from "../components/Card";

const GameOverScreen = props => {
  return (
    <ImageBackground
      source={whiteBg}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <View style={styles.screen}>
        <Card style={styles.card}>
          <View>
            <Text style={styles.text}>The game is over!</Text>
            <Text style={styles.text}>
              Number of roundes: {props.roundsNumber}
            </Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <Button
              title="New game"
              onPress={props.onRestart}
              color={Colors.primary}
              style={styles.button}
            />
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  card: {
    width: "80%",
    height: "25%"
  },
  text: {
    fontSize: 20,
    marginVertical: 3
  },
  button: {
    width: "60%"
  }
});

export default GameOverScreen;
