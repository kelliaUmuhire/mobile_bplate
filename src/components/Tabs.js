import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import SignOut from "../screens/Auth/SignOut";
import NewCounter from "../screens/NewCounter";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#6804ec" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewCounter"
        component={NewCounter}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={SignOut}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
