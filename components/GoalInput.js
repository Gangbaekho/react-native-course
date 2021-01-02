import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    // 문제가 되는건 Modal을 쓰게 되면은 화면 전체를 잡아먹게 된다.
    // Default flow를 벗어난다라고 생각을 하면 되는 것일까
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // 이렇게 하면은 부모의 전체 크기를 상속받게 된다는 그런 말인가.
    // flex에 대해서 좀 더 공부를 해야겠구만.
    // 이렇게 해주면 화면 정 가운데에 놓여지게 된다, x축 y축 모두 다.
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
});

export default GoalInput;
