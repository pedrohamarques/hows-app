import { Image, Text, TouchableOpacity, View } from "react-native";

import { hp } from "@utils/dimensions";

import { FirebaseUserDatabase } from "@typings/authentication";

import { useChatItem } from "./chat-item.hook";

type ChatItemProps = {
  testID?: string;
  user: FirebaseUserDatabase;
  onChatPress: () => void;
};

export function ChatItem({
  testID = "components.chat-item",
  onChatPress,
  user,
}: ChatItemProps) {
  const { handleLastMessage, lastMessageTime } = useChatItem(user);

  return (
    <TouchableOpacity
      testID={testID}
      className="flex-row justify-between mx-4 items-center space-x-2 my-1 py-2"
      onPress={onChatPress}
    >
      <Image
        source={
          user.photoUrl
            ? { uri: user.photoUrl }
            : require("@assets/empty-image.png")
        }
        style={{ height: hp(6), width: hp(6) }}
        className="rounded-full"
      />

      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {user.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-medium text-neutral-800"
          >
            {lastMessageTime}
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
