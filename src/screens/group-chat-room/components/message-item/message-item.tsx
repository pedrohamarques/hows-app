import { Text, View } from "react-native";

import { hp, wp } from "@utils/dimensions";

import { MessageProp } from "@typings/chat";

import { useAuthContext } from "@contexts/auth-context";

type MessageItemProps = {
  testID?: string;
  message: MessageProp;
};

export function MessageItem({
  testID = "screens.chat-room.components.message-item",
  message,
}: MessageItemProps) {
  const { user: loggedUser } = useAuthContext();

  const user = loggedUser!.uid === message.senderId;

  const userStyle = "self-end bg-white border-neutral-200";
  const targetStyle = "self-start bg-indigo-100 border-indigo-200";

  return (
    <View className="flex-row justify-center items-center mb-3" testID={testID}>
      <View style={{ width: wp(95) }}>
        <View
          className={`p-3 px-4 rounded-2xl ${user ? userStyle : targetStyle}`}
        >
          <Text style={{ fontSize: hp(1.9) }}>{message.text}</Text>
        </View>
      </View>
      <Text>{new Date(message.sendAt).toISOString()}</Text>
    </View>
  );
}
