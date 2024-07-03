import { FlatList, View } from "react-native";

import { Divider } from "@components/divider";
import { EmptyList } from "@components/empty-list";

import { FirebaseUserDatabase } from "@typings/authentication";

import { useChatList } from "./chat-list.hook";
import { ChatItem } from "../chat-item";

type ChatListProps = {
  testID?: string;
  data: FirebaseUserDatabase[];
  isGroup?: boolean;
};

export function ChatList({
  data,
  testID = "screens.home.components.chat-list",
}: ChatListProps) {
  const { handleChatPress } = useChatList();

  return (
    <View testID={testID} className="flex-1">
      <FlatList
        data={data}
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
