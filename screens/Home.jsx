import React from "react";
import {  ImageBackground, Text, View } from "react-native";
import homeStyles from "../css/home";
import { Button } from "@rneui/themed";

export default function Home({ navigation }) {
  return (
    <ImageBackground style={homeStyles.container}>
      <Text style={homeStyles.minText}>Wellome to school</Text>
      <Button
        size="lg"
        buttonStyle={homeStyles.logiBnt}
        onPress={() => navigation.navigate("Login")}
        titleStyle={{
            fontSize :25,
        }}
      >
        Login
      </Button>
    </ImageBackground>
  );
}
