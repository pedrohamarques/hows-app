import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PrivateRoutesParams } from "@typings/routes";

export function useBackButton() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();

  function handleGoBack() {
    navigation.goBack();
  }

  return {
    handleGoBack,
  };
}
