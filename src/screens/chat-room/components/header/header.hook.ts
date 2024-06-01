import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PrivateRoutesParams } from "@typings/routes";

export function useHeader() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();

  function handleBackPress() {
    navigation.goBack();
  }
  return {
    handleBackPress,
  };
}
