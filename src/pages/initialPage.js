import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FirstScreen({ navigation }) {
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, []);

  return null;
}
