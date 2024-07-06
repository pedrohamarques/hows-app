import { Image, Text, TouchableOpacity, View } from "react-native";

import { hp } from "@utils/dimensions";

import { GroupChatProp } from "@typings/chat";

import { useChatItem } from "./chat-item.hook";

type ChatItemProps = {
  testID?: string;
  chat: GroupChatProp;
  onChatPress: () => void;
};

export function ChatItem({
  testID = "components.chat-item",
  onChatPress,
  chat,
}: ChatItemProps) {
  const { handleLastMessage } = useChatItem(chat);
  return (
    <TouchableOpacity
      testID={testID}
      className="flex-row justify-between mx-4 items-center space-x-2 my-1 py-2"
      onPress={onChatPress}
    >
      <Image
        source={require("@assets/empty-image.png")}
        style={{ height: hp(6), width: hp(6) }}
        className="rounded-full"
      />

      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {chat.name}
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-medium text-neutral-800"
          >
            Date
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          {handleLastMessage()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
