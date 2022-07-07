import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { createUser } from "../../services/AuthService";
import s_global from "../../utils/s_global";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const handleRegister = () => {
    if (email === "" || password === "" || username === "") {
      setError("All fields are required");
    } else {
      createUser({ email, password, username })
        .then((res) => {
          navigation.navigate("SignIn");
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    }
  };
  return (
    <View style={s_global.container_b}>
      <Text style={s_global.b_title}>Sign Up</Text>
      <View style={{ marginTop: 30, width: 200, alignItems: "center" }}>
        <Text
          style={[s_global.error_msg, { display: error ? "flex" : "none" }]}
        >
          {error}
        </Text>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={s_global.i_text_lg}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={s_global.i_text_lg}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={s_global.i_text_lg}
        />
        <Button
          icon="lock-open-variant-outline"
          mode="contained"
          onPress={handleRegister}
          style={{ marginTop: 30, width: 300 }}
        >
          Sign In
        </Button>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 20 }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text>Already have an account? </Text>
        <Text style={[s_global.underline, s_global.b_tcolor]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  l_button: {
    width: 300,
  },
});
