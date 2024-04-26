import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#f0c000"
  },
  minText: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
    paddingVertical: 20
  },
  logiBnt: {
    fontSize: 30,
    fontWeight: "bold",
    width: 220,
    borderRadius: 20
  }
});

export default homeStyles;
