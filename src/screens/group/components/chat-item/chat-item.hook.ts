import { useEffect, useState } from "react";

import { useAuthContext } from "@contexts/auth-context";
import { useSocketContext } from "@contexts/socket-context";

import { GroupChatProp, MessageProp } from "@typings/chat";

export function useChatItem(group: GroupChatProp) {
  console.log(group.id);
  const [lastMessage, setLastMessage] = useState<MessageProp | null>(null);

  const { user } = useAuthContext();
  const { socket } = useSocketContext();

  function retrieveMessages() {
    if (socket) {
      socket.emit("getAllMessages", { index: group.id });

      socket.on("messageList", (messages: MessageProp[]) => {
        if (messages.length !== 0) {
          return setLastMessage(messages[messages.length - 1]);
        }
      });
    }
  }

  function handleLastMessage() {
    if (lastMessage) {
      if (lastMessage.senderId === user!.uid) {
        return `You: ${lastMessage.text}`;
      } else {
        return lastMessage.text;
      }
    }
    return null;
  }

  useEffect(() => {
    retrieveMessages();
  }, [socket]);

  return {
    handleLastMessage,
  };
}
