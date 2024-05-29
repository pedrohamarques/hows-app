import { Image, Text, TouchableOpacity, View } from "react-native";

import { hp } from "@utils/dimensions";

import { FirebaseUserDatabase } from "@typings/authentication";

type ChatItemProps = {
  testID?: string;
  user: FirebaseUserDatabase;
};

export function ChatItem({
  testID = "screens.home.components.chat-item",
  user,
}: ChatItemProps) {
  return (
    <TouchableOpacity
      testID={testID}
      className="flex-row justify-between mx-4 items-center space-x-2 my-1 py-2"
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
            {user.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-medium text-neutral-800"
          >
            Time
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          Last message
        </Text>
      </View>
    </TouchableOpacity>
  );
}
