import { Image, Text, View } from "react-native";

type EmptyListProps = {
  testID?: string;
};

export function EmptyList({
  testID = "screens.home.components.empty-list",
}: EmptyListProps) {
  return (
    <View testID={testID} className="justify-center items-center">
      <Image
        source={require("@assets/empty-search.png")}
        className="w-[75%] h-[60%]"
      />
      <Text className="tracking-wider text-neutral-600 font-medium">
        There&apos;s no chats here. Start chatting!
      </Text>
    </View>
  );
}
