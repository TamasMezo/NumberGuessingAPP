import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import whiteBg from "../assets/whiteBg.jpg";
import Colors from "../constans/colors";
import Defaultstyles from "../constans/default-styles";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

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

/* const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{numOfRound}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
); */
const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoise);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [avalaibaleDeviceWidth, setAvalaibaleDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [avalaibaleDeviceHeight, setavalaibaleDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setavalaibaleDeviceHeight(Dimensions.get("window").height);
      setAvalaibaleDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(pastGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setPastGuesses(curRoundes => curRoundes + 1);
    //setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
  };

  let listContainerStyle = styles.listContainer;

  if (avalaibaleDeviceWidth < 350) {
    listContainerStyle = styles.listContainer;
  }

  if (avalaibaleDeviceHeight < 500) {
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
          <View style={styles.controls}>
            <MainButton
              onPress={nextGuessHandler.bind(this, "lower")}
              color={Colors.secondary}
            >
              <Ionicons name={"md-remove"} size={24} color={"white"} />
            </MainButton>
            <NumberContainer>{currentGuess}</NumberContainer>
            <MainButton
              onPress={nextGuessHandler.bind(this, "greater")}
              color={Colors.primary}
            >
              <Ionicons name={"md-add"} size={24} color={"white"} />
            </MainButton>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              keyExtractor={item => {
                item;
              }}
              data={pastGuesses}
              renderItem={renderListItem.bind(this, pastGuesses.length)}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

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
          <MainButton
            onPress={nextGuessHandler.bind(this, "lower")}
            color={Colors.secondary}
          >
            <Ionicons name={"md-remove"} size={24} color={"white"} />
          </MainButton>
          <MainButton
            onPress={nextGuessHandler.bind(this, "greater")}
            color={Colors.primary}
          >
            <Ionicons name={"md-add"} size={24} color={"white"} />
          </MainButton>
        </Card>
        <View style={styles.listContainer}>
          {/* <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) =>
              renderListItem(guess, pastGuesses.length - index)
            )}
          </ScrollView> */}
          <FlatList
            keyExtractor={item => {
              item;
            }}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.list}
          />
        </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 80 : 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 300,
    maxWidth: "80%"
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%"
  },
  list: {
    flexGrow: 1,
    //alignItems: "center",
    justifyContent: "flex-end"
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%"
  },
  listItem: {
    borderColor: "grey",
    borderWidth: 1,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default GameScreen;
