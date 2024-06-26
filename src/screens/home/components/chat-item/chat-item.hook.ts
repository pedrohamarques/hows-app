import { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { useAuthContext } from "@contexts/auth-context";

import { MessageProps } from "@screens/chat-room/types";
import { getRoomId } from "@screens/chat-room/utils";

import { database } from "@services/firebaseConfig";

import { FirebaseUserDatabase } from "@typings/authentication";
import { formatTimestamp } from "./util";

export function useChatItem(user: FirebaseUserDatabase) {
  const [lastMessage, setLastMessage] = useState<MessageProps | null>(null);

  const { user: loggedUser } = useAuthContext();

  const roomId = getRoomId(loggedUser!.uid, user.id);

  async function retrieveMessages() {
    try {
      const docRef = doc(database, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");

      const q = query(messagesRef, orderBy("createdAt", "desc"));

      const unsub = onSnapshot(q, (snapshot) => {
        const allMessages = snapshot.docs.map((doc) => {
          return doc.data() as MessageProps;
        });

        setLastMessage(allMessages[0]);
      });

      return unsub;
    } catch (error) {
      console.log(error);
    }
  }

  function handleLastMessage() {
    if (lastMessage) {
      if (lastMessage.userId !== user.id) {
        return `You: ${lastMessage.text}`;
      } else if (lastMessage.userId === user.id) {
        return `${lastMessage.senderName}: ${lastMessage.text}`;
      } else {
        return "Loading...";
      }
    }
  }

  const lastMessageTime = lastMessage
    ? formatTimestamp(lastMessage?.createdAt)
    : null;

  useEffect(() => {
    retrieveMessages();
  }, []);

  return { handleLastMessage, lastMessageTime };
}
