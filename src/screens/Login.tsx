import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Get started with Finance app</Text>
        <TextInput placeholder="email" style={styles.input} accessibilityHint="email" accessibilityLabel="email" />
        <TextInput placeholder="password" style={styles.input} />
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressedItem : styles.button)}
          android_ripple={{ color: "tortoise" }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8F9FD",
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    marginBottom: 10,
    color: "#59CE8F",
    textAlign: "center",
    fontWeight: "700",
    width: 300,
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
    width: 300,
    height: 50,
    paddingLeft: 10,
  },

  button: {
    marginTop: 5,
    width: 300,
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
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
