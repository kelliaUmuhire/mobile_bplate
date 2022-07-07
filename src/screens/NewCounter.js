import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import s_global from "../utils/s_global";

export default function NewCounter() {
  const [text, setText] = useState("");
  // const { token } = useSelector((state) => state.app);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        variant="displayLarge"
        style={[s_global.b_title, { marginBottom: 40 }]}
      >
        New Counter
      </Text>
      <TextInput
        label="Name"
        keyboardType="visible-password"
        value={text}
        onChangeText={setText}
        style={s_global.i_text_lg}
      />
      <TextInput
        label="Content"
        keyboardType="visible-password"
        value={text}
        onChangeText={setText}
        style={s_global.i_text_lg}
      />
      <Text>TODO: SELECT</Text>

      <Button
        icon="plus"
        mode="contained"
        onPress={() => {}}
        style={{ marginTop: 30, width: 345 }}
      >
        Add Counter
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
