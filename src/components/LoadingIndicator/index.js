import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../../config";

const LoadingIndicator = ({ isLoading }) => {
  return (
    <View style={styles.container} pointerEvents={"none"}>
      <ActivityIndicator
        size={"large"}
        color={Colors.primary}
        animating={isLoading}
        backdropOpacity={0.3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
  },
});

export default LoadingIndicator;
