import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  curve: {
    position: "absolute",
    width: Dimensions.get("window").width,
    backgroundColor: "#bf344e",
    height: 160,
  },
});

export default style;
