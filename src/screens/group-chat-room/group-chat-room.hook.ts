import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { useAuthContext } from "@contexts/auth-context";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

import { MessageProps } from "./types";

export function useGroupChatRoom() {
  const routes =
    useRoute<RouteProp<PrivateRoutesParams, PRIVATE_ROUTES.GROUP_CHAT_ROOM>>();

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  const { user } = useAuthContext();

  const groupData = routes.params.groupData;

  console.log(groupData, "groupData");

  const scrollViewChatRef = useRef<ScrollView | null>(null);

  function updateScrollView() {
    setTimeout(() => {
      scrollViewChatRef.current?.scrollToEnd({ animated: true });
    }, 50);
  }

  async function handleSendMessage() {
    if (!messageText?.trim()) {
      return;
    }
  }

  async function retrieveMessages() {}

  useEffect(() => {
    retrieveMessages();
  }, []);

  useEffect(() => {
    updateScrollView();
  }, [messages]);

  return {
    groupData,
    messages,
    handleSendMessage,
    setMessageText,
    messageText,
    scrollViewChatRef,
  };
}
