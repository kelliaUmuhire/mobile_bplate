import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/index";

export default function SignOut() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(logout());
    // navigation.navigate("SignIn");
  }, []);
  return (
    <View>
      <Text>Logging Out</Text>
    </View>
  );
}
