import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";
import SettingsScreen from "@screens/settings";
import ChatRoomScreen from "@screens/chat-room";
import GroupScreen from "@screens/group";
import GroupChatRoomScreen from "@screens/group-chat-room";

import { CustomHeader } from "@components/header-custom";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";
import { ProfileScreen } from "@screens/profile";

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
      <Stack.Screen
        name={PRIVATE_ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Profile"
              hasAvatar={false}
              testID="routes.private.routes.profile-screen"
              canGoBack
            />
          ),
        }}
      />
      <Stack.Screen
        name={PRIVATE_ROUTES.GROUP}
        component={GroupScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Groups"
              hasAvatar={true}
              testID="routes.private.routes.group-screen"
            />
          ),
        }}
      />
      <Stack.Screen
        name={PRIVATE_ROUTES.GROUP_CHAT_ROOM}
        component={GroupChatRoomScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
