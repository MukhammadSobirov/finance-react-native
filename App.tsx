import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Get started with Finance app</Text>
        <TextInput placeholder="email" style={styles.input} accessibilityHint="email" accessibilityLabel="email" />
        <TextInput placeholder="password" style={styles.input} />
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressedItem : styles.button)}
          android_ripple={{ color: "tortoise" }}
        >
          <Text style={styles.btnText}>login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8F9FD",
    justifyContent: "center",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 200,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 280,
    height: 50,
    paddingLeft: 10,
  },

  button: {
    marginTop: 5,
    width: 280,
    height: 40,
    backgroundColor: "#59CE8F",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  pressedItem: {
    backgroundColor: "#3FA796",
    marginTop: 5,
    width: 280,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
