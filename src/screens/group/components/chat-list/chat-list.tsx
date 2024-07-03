import { FlatList, View } from "react-native";

import { Divider } from "@components/divider";
import { ChatItem } from "../chat-item";
import { EmptyList } from "@components/empty-list";

import { useChatList } from "./chat-list.hook";
import { GroupChatProp } from "@typings/chat";

type ChatListProps = {
  testID?: string;
  data: GroupChatProp[];
  isGroup?: boolean;
};

export function ChatList({
  data,
  testID = "screens.group.components.chat-list",
}: ChatListProps) {
  const { handleChatPress } = useChatList();

  return (
    <View testID={testID} className="flex-1">
      <FlatList
        data={data}
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        className="py-5"
        renderItem={({ item }) => {
          return (
            <ChatItem chat={item} onChatPress={() => handleChatPress(item)} />
          );
        }}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          <EmptyList testID="screens.home.components.chat-list.empty-list" />
        }
      />
    </View>
  );
}
