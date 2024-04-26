import React from "react";
import { Text, View } from "react-native";
import { Input, Button } from "@rneui/themed";
import homeStyles from "../css/home";

export default function Login({ navigation }) {
  const loginInfo = {
    email: "",
    password: ""
  };
  const handlerChange = (e) => {
    loginInfo[e.target.name] = e.target.value;
  };

console.log(loginInfo);
  return (
    <View style={homeStyles.container}>
      <Input
        name="email"
        placeholder="Enter your Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChange={(e) => {
          handlerChange(e);
        }}
        inputStyle={{
          paddingHorizontal: 10,
          color: "#000"
        }}
        placeholderTextColor={"#000"}
        keyboardType="email-address"
      />
      <Input
        name="password"
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChange={(e) => {
          handlerChange(e);
        }}
        inputStyle={{
          paddingHorizontal: 10,
          color: "#000"
        }}
        placeholderTextColor={"#000"}
        keyboardType="default"
      />
      <View style={{marginVertical:10, display:"flex" , justifyContent:"space-between" , width:"100%" , flexDirection:"row"}}>
        <Button titleStyle={{color:"#000"}} type="clear"> Register</Button>
        <Button type="clear">forget Password</Button>
      </View>

      <Button
        size="lg"
        buttonStyle={homeStyles.logiBnt}
        onPress={() => navigation.navigate("Register")}
        titleStyle={{
          fontSize: 25
        }}
      >
        Login
      </Button>
    </View>
  );
}
