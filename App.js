import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);

  function handleAddItem() {
    const itemText = text.trim();
    if (!itemText) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: nextId, text: itemText },
    ]);
    setNextId((currentId) => currentId + 1);
    setText("");
  }

  function handleRemoveItem(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Zadaj úlohu..."
          onSubmitEditing={handleAddItem}
          returnKeyType="done"
        />
        <Pressable
          onPress={handleAddItem}
          style={styles.addButton}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Pridať</Text>
        </Pressable>
      </View>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>{item.text}</Text>
            <Pressable
              onPress={() => handleRemoveItem(item.id)}
              style={styles.removeButton}
              accessibilityLabel={`Odstrániť úlohu ${item.text}`}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Zmazať</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Zatiaľ tu nie sú žiadne úlohy.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    minWidth: 0,
    minHeight: 44,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#0086d9",
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: "#eca2a2",
    borderRadius: 6,
  },
  listContent: {
    flexGrow: 1,
    padding: 8,
  },
  taskRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#ffffff",
    borderRadius: 6,
  },
  taskText: {
    flex: 1,
    minWidth: 0,
    fontSize: 16,
  },
  addButton: {
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#0086d9",
  },
  removeButton: {
    minHeight: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#0086d9",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyText: {
    marginTop: 12,
    textAlign: "center",
  },
});
