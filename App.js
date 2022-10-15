import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import CoinDetailedScreen from "./src/screen/CoinDetailedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailedScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
