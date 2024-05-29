import { useAuthContext } from "@contexts/auth-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export function useCustomHeader() {
  const { user } = useAuthContext();

  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();

  function handleAvatarPress() {
    navigation.navigate(PRIVATE_ROUTES.SETTINGS);
  }
  return {
    user,
    handleAvatarPress,
  };
}
