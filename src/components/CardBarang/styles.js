import { StyleSheet } from "react-native";

import { Colors } from "../../config";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.black0,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default styles;
