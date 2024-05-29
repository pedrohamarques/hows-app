import { FlatList, View } from "react-native";

import { Divider } from "@components/divider";

import { ChatItem } from "../chat-item";

import { FirebaseUserDatabase } from "@typings/authentication";

type ChatListProps = {
  testID?: string;
  users: FirebaseUserDatabase[];
};

export function ChatList({
  users,
  testID = "screens.home.components.chat-list",
}: ChatListProps) {
  return (
    <View testID={testID} className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        className="py-5"
        renderItem={({ item }) => <ChatItem user={item} />}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}
