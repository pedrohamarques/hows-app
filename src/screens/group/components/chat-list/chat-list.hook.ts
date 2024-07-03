import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { GroupChatProp } from "@typings/chat";
import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export function useChatList() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();

  function handleChatPress(data: GroupChatProp) {
    navigation.navigate(PRIVATE_ROUTES.CHAT_ROOM, { groupData: data });
  }

  return {
    handleChatPress,
  };
}
