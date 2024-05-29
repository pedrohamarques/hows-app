import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@components/loading";

import { ChatList } from "./components/chat-list/chat-list";
import { useHomeScreen } from "./home.hook";

export function HomeScreen() {
  const { users } = useHomeScreen();
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex-1 items-center justify-center ">
          <Loading size={80} testID="screens.home.loading" />
        </View>
      )}
    </View>
  );
}
