import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../services/AuthService";
import { authenticate } from "../../store/reducers";
import s_global from "../../utils/s_global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, TextInput } from "react-native-paper";
import { useEffect } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { isAuth } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("All fields are required");
    } else {
      logInUser({ email, password: password.toString() })
        .then(async (res) => {
          try {
            await AsyncStorage.setItem("@counter_token", res.data.token);
            dispatch(
              authenticate({ token: res.data.token, user: res.data.user })
            );
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    }
  };

  useEffect(() => {
    // if (isAuth) {
    //   navigation.navigate("Home");
    // }
  }, []);
  return (
    <View style={s_global.container_b}>
      <Text style={s_global.b_title}>Welcome!</Text>
      <Image
        style={styles.wave}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png",
        }}
      />
      <View style={{ marginTop: 30, width: 200, alignItems: "center" }}>
        <Text
          style={[s_global.error_msg, { display: error ? "flex" : "none" }]}
        >
          {error}
        </Text>
        {/* <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={s_global.i_text}
        /> */}
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
          onPress={handleLogin}
          style={{ marginTop: 30, width: 345 }}
        >
          Sign In
        </Button>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 20 }}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Don't have an account? </Text>
        <Text style={[s_global.underline, s_global.b_tcolor]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wave: {
    marginTop: 20,
    height: 40,
    width: 40,
  },

  l_button: {
    width: 300,
  },
});
