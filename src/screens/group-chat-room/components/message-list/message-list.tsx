import { LegacyRef } from "react";
import { ScrollView } from "react-native";

import { MessageItem } from "../message-item";

import { MessageProp } from "@typings/chat";

type MessageListProps = {
  testID?: string;
  messages?: MessageProp[];
  scrollRef: LegacyRef<ScrollView>;
};

export function MessageList({
  testID = "screens.group-chat-room.components.message-list",
  messages,
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
      {messages?.map((message, index) => (
        <MessageItem
          testID="screens.group-chat-rom.components.message-list"
          message={message}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
