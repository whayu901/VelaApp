import { StyleSheet } from "react-native";

import { Colors } from "../../config";

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 15,
  },
  textBtn: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default styles;
