import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import "react-native-get-random-values";
import { v4 } from "uuid";

import { useAuthContext } from "@contexts/auth-context";
import { useSocketContext } from "@contexts/socket-context";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";
import { MessageProp } from "@typings/chat";

export function useGroupChatRoom() {
  const routes =
    useRoute<RouteProp<PrivateRoutesParams, PRIVATE_ROUTES.GROUP_CHAT_ROOM>>();

  const [messages, setMessages] = useState<MessageProp[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  const { user } = useAuthContext();
  const { socket } = useSocketContext();

  const groupData = routes.params.groupData;

  const scrollViewChatRef = useRef<ScrollView | null>(null);

  function updateScrollView() {
    setTimeout(() => {
      scrollViewChatRef.current?.scrollToEnd({ animated: true });
    }, 50);
  }

  function handleSendMessage() {
    if (!messageText?.trim()) {
      return;
    }

    socket?.emit("sendNewMessage", {
      groupid: groupData.id,
      sendAt: new Date(),
      senderId: user?.uid,
      text: messageText,
      messageId: v4(),
    });

    setMessageText("");

    retrieveMessages();
  }

  function retrieveMessages() {
    if (socket) {
      socket.emit("getAllMessages", { index: groupData.id });

      socket.on("messageList", (messages) => setMessages(messages));
    }
  }

  useEffect(() => {
    retrieveMessages();
  }, [socket]);

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
