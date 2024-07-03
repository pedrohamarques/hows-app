import { Text, View } from "react-native";

import { FirebaseUserDatabase } from "@typings/authentication";
import { MessageProps } from "@screens/chat-room/types";
import { hp, wp } from "@utils/dimensions";

type MessageItemProps = {
  testID?: string;
  targetUser: FirebaseUserDatabase;
  message: MessageProps;
};

export function MessageItem({
  testID = "screens.chat-room.components.message-item",
  targetUser,
  message,
}: MessageItemProps) {
  const user = targetUser.id !== message.userId;

  const userStyle = "self-end bg-white border-neutral-200";
  const targetStyle = "self-start bg-indigo-100 border-indigo-200";

  return (
    <View className="flex-row justify-center mb-3" testID={testID}>
      <View style={{ width: wp(95) }}>
        <View
          className={`p-3 px-4 rounded-2xl ${user ? userStyle : targetStyle}`}
        >
          <Text style={{ fontSize: hp(1.9) }}>{message.text}</Text>
        </View>
      </View>
    </View>
  );
}
