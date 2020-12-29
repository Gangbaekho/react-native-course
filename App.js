import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

// StyleSheet.create를 안쓰고 그냥 {}로 줘도
// 먹히긴 하는데, 최적화나 여러가지 관련해서
// 더 추가해주는 기능이 있으니까 그냥 이렇게 쓰도록 해라.

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});
