import { FlatList, View } from "react-native";

import { Divider } from "@components/divider";

import { FirebaseUserDatabase } from "@typings/authentication";

import { ChatItem } from "../chat-item";
import { useChatList } from "./chat-list.hook";
import { EmptyList } from "../empty-list";

type ChatListProps = {
  testID?: string;
  users: FirebaseUserDatabase[];
};

export function ChatList({
  users,
  testID = "screens.home.components.chat-list",
}: ChatListProps) {
  const { handleChatPress } = useChatList();

  return (
    <View testID={testID} className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        className="py-5"
        renderItem={({ item }) => (
          <ChatItem user={item} onChatPress={() => handleChatPress(item)} />
        )}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          <EmptyList testID="screens.home.components.chat-list.empty-list" />
        }
      />
    </View>
  );
}
