import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";
import SettingsScreen from "@screens/settings";
import ChatRoomScreen from "@screens/chat-room";

import { CustomHeader } from "@components/header-custom";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export default function PrivateRoutes() {
  const Stack = createNativeStackNavigator<PrivateRoutesParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PRIVATE_ROUTES.HOME}
        component={HomeScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Chats"
              testID="routes.private-routes.home-screen"
            />
          ),
        }}
      />
      <Stack.Screen
        name={PRIVATE_ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Settings"
              hasAvatar={false}
              testID="routes.private-routes.settings-screen"
              canGoBack
            />
          ),
        }}
      />
      <Stack.Screen
        name={PRIVATE_ROUTES.CHAT_ROOM}
        component={ChatRoomScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
