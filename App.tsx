import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as TaskManager from "expo-task-manager";

const App: React.FC<{}> = () => {
  const [state, setstate] = React.useState();
  const [Geocode, setGeocode] = React.useState();
  React.useEffect(() => {
    Location.getLastKnownPositionAsync().then(data => {
      setstate(JSON.stringify(data));
    });

    // setstate();
    // setGeocode(Location.reverseGeocodeAsync(state));
    //ユーザーが位置情報サービスを有効にしているかどうかを確認します。
    // const hohoho = Location.Accuracy.BestForNavigation;
    console.log(Permissions.LOCATION);
    console.log(Location.GeofencingEventType.Exit);
    console.log(Location.getHeadingAsync());
    // console.log(Location.geocodeAsync("Baker Street London"));
    console.log(
      "==============================================================="
    );
    Location.hasServicesEnabledAsync();
    Location.requestPermissionsAsync();
    Location.getPermissionsAsync();
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.red}>Hello World</Text>
      <Text>場所{state}</Text>
      {/* <Text>はい！{Geocode}</Text> */}
      <Text>{Location.GeofencingEventType.Exit}</Text>
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

export default App;
