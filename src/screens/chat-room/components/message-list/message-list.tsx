import { ScrollView } from "react-native";

import { MessageItem } from "../message-item";

import { FirebaseUserDatabase } from "@typings/authentication";

import { MessageProps } from "@screens/chat-room/types";

type MessageListProps = {
  testID?: string;
  messages?: MessageProps[];
  targetUser: FirebaseUserDatabase;
};

export function MessageList({
  testID = "screens.chat-room.components.message-list",
  messages,
  targetUser,
}: MessageListProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="py-2.5"
      testID={testID}
    >
      {messages?.map((message, index) => (
        <MessageItem
          testID="screens.chat-rom.components.message-list"
          message={message}
          targetUser={targetUser}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
