import { StyleSheet } from "react-native";

import { Colors } from "../../config";

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 140,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 9,
  },
  textMenu: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default styles;
