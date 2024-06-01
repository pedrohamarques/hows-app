import { Text, View } from "react-native";

type MessageListProps = {
  testID?: string;
  messages?: string[];
};

export function MessageList({
  testID = "screens.chat-room.components.message-list",
  messages,
}: MessageListProps) {
  return (
    <View>
      <Text>MessageList</Text>
    </View>
  );
}
