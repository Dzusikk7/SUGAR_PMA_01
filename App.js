import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem(item) {
    console.log("IItem:", item);
    setTask([...task, item]);
    console.log("Task:", task);
  }
  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Enter task..."
        />
        <Button title="ADD" onPress={() => handleAddItem(text)} />
      </View>
      <View style={styles.udalosti}>
        {task.map((i) => {
          <Text>{i}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 4,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "9c9b9b",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "0086d9",
  },
  udalosti: {
    flex: 5,
    backgroundColor: "eca2a2",
  },
});
