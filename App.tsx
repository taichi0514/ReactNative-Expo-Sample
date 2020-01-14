import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export default function App() {
  React.useEffect(() => {
    // console.log(Location.requestPermissionsAsync())
    // console.log(Location.getLastKnownPositionAsync())
    console.log(Location.Accuracy.BestForNavigation)
    console.log(Location.GeofencingEventType.Exit)
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
