import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const Hello: React.FC = props => {
  const [Location, setLocation] = useState("d");
  React.useEffect(() => {
    setLocation("hpge");
    console.log(Location.requestPermissionsAsync());
    console.log(Location.getLastKnownPositionAsync());
    //ユーザーが位置情報サービスを有効にしているかどうかを確認します。
    // const hohoho = Location.Accuracy.BestForNavigation;

    // console.log(Location.Accuracy.BestForNavigation);
    // console.log(Location.GeofencingEventType.Exit);
    console.log(
      "==============================================================="
    );
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.red}>Hello World</Text>
      <Text>場所{Location}</Text>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    color: "red"
  }
});
