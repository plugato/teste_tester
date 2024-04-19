import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "username" && password === "password") {
      setLoginSuccess(true);
      setErrorMessage("");
      navigation.navigate("Home");
    } else {
      setLoginSuccess(false);
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        testID="username_input"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        testID="password_input"
      />
      <Button title="Login" onPress={handleLogin} testID="login_button" />
      {errorMessage !== "" && <Text>{errorMessage}</Text>}
      {loginSuccess && <Text>Login successful!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default LoginScreen;
