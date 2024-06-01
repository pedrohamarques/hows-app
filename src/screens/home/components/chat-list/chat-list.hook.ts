import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FirebaseUserDatabase } from "@typings/authentication";
import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export function useChatList() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();

  function handleChatPress(user: FirebaseUserDatabase) {
    navigation.navigate(PRIVATE_ROUTES.CHAT_ROOM, { userData: user });
  }

  return {
    handleChatPress,
  };
}
