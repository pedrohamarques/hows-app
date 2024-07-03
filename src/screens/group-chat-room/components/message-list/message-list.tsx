import { ScrollView } from "react-native";

import { MessageItem } from "../message-item";

import { FirebaseUserDatabase } from "@typings/authentication";

import { MessageProps } from "@screens/chat-room/types";
import { LegacyRef } from "react";

type MessageListProps = {
  testID?: string;
  messages?: MessageProps[];
  targetUser: FirebaseUserDatabase;
  scrollRef: LegacyRef<ScrollView>;
};

export function MessageList({
  testID = "screens.chat-room.components.message-list",
  messages,
  targetUser,
  scrollRef,
}: MessageListProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="py-2.5"
      // contentContainerStyle={{ flex: 1 }}
      testID={testID}
      ref={scrollRef}
    >
      {/* {messages?.map((message, index) => (
        <MessageItem
          testID="screens.chat-rom.components.message-list"
          message={message}
          targetUser={targetUser}
          key={index}
        />
      ))} */}
    </ScrollView>
  );
}
