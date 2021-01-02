import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = (enteredGoal) => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        {/* View는 Div와 같은 역할을 한다고 했는데,
        여기서 Web이랑 차이점은 div는 항상 width 100%인데, 
        View는 Children이 차지하는 Width의 길이만큼만 차지한다는 것이
        특징이다. 그렇기 때문에 justify-content가 처음에 원하는 방향으로
        이루어지지 않았다는 것이다.
        */}
        <View style={styles.buttonContainer}>
          {/* 또 여기서 주의해야 할 것은, Button 그 자체에다가는 Styling을 하지 않고
          Button을 View로 한 번 감싸주고, 그 View에다가 Width를 주었더니 그 길이만큼
          버튼이 알아서 길이가 늘어났다는 것이다. 이건 좀 Web이랑 다른 부분이니까
          생각을 해보도록 하자. 
          */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                addGoalHandler(enteredGoal);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
