import { useEffect, useRef, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

import { useAuthContext } from "@contexts/auth-context";

import { database } from "@services/firebaseConfig";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

import { getRoomId } from "./utils";

import { MessageProps } from "./types";
import { ScrollView } from "react-native";

export function useChatRoomScreen() {
  const routes =
    useRoute<RouteProp<PrivateRoutesParams, PRIVATE_ROUTES.CHAT_ROOM>>();

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  const { user } = useAuthContext();

  const userInfo = routes.params.userData;

  const roomId = getRoomId(user!.uid!, userInfo.id);

  const scrollViewChatRef = useRef<ScrollView | null>(null);

  async function handleCreateRoom() {
    await setDoc(doc(database, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  }

  function updateScrollView() {
    setTimeout(() => {
      scrollViewChatRef.current?.scrollToEnd({ animated: true });
    }, 50);
  }

  async function handleSendMessage() {
    if (!messageText?.trim()) {
      return;
    }

    try {
      const docRef = doc(database, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");
      await addDoc(messagesRef, {
        userId: user?.uid,
        text: messageText,
        profileUrl: user?.photoURL ? user.photoURL : null,
        senderName: user?.displayName,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setMessageText("");
    } catch (error) {
      console.log(error);
    }
  }

  async function retrieveMessages() {
    try {
      const docRef = doc(database, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");

      const q = query(messagesRef, orderBy("createdAt", "asc"));

      const unsub = onSnapshot(q, (snapshot) => {
        const allMessages = snapshot.docs.map((doc) => {
          return doc.data() as MessageProps;
        });
        setMessages([...allMessages]);
      });

      return unsub;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCreateRoom();
  }, []);

  useEffect(() => {
    retrieveMessages();
  }, []);

  useEffect(() => {
    updateScrollView();
  }, [messages]);

  return {
    userInfo,
    messages,
    handleSendMessage,
    setMessageText,
    messageText,
    scrollViewChatRef,
  };
}
