import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image
} from "react-native";
import Colors from "../constans/colors";
import whiteBg from "../assets/whiteBg.jpg";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <ImageBackground
      source={whiteBg}
      style={{
        width: "100%",
        height: "105%"
      }}
    >
      <Header />
      <View style={styles.screen}>
        <View>
          <TitleText style={styles.text}>The game is over!</TitleText>
          <View style={styles.imageContainer}>
            <Image
              fadeDuration={500}
              source={require("../assets/success.png")} //local image
              /* source={{
                  uri:
                    "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"
                }} */
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <BodyText style={styles.text}>
            Number of roundes: {props.roundsNumber}
          </BodyText>
          <Text style={styles.text}>Number was: {props.userNumber}</Text>
          <Button
            title="New game"
            onPress={props.onRestart}
            color={Colors.primary}
            style={styles.button}
          />
        </View>
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
    textAlign: "center",
    marginVertical: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "60%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  }
});

export default GameOverScreen;
