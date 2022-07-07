import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Tabs from "./components/Tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { authenticate } from "./store/reducers";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { isAuth } = useSelector((state) => state.app);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@counter_token");
      if (value) {
        //remember to add names to token
        let decoded = jwt_decode(value);
        authenticate({ token: value, user: decoded });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  });
  return (
    <NavigationContainer>
      {!isAuth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tabs />
      )}
    </NavigationContainer>
  );
}
