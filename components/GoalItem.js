import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    // 이렇게 Highlight를 쓰고 underlayColor를 하면
    // Touch 했을 때 , background 색깔을 바꿔준다는 것이다.
    // 뭐 이것 말고도 엄청 다양하겠지만, 이정도 있다는 것 정도만 알아두자.
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
