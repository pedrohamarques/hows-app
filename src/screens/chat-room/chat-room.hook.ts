import { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export function useChatRoomScreen() {
  const routes =
    useRoute<RouteProp<PrivateRoutesParams, PRIVATE_ROUTES.CHAT_ROOM>>();

  const [messages, setMessages] = useState([]);

  const userInfo = routes.params.userData;
  return {
    userInfo,
    messages,
  };
}
