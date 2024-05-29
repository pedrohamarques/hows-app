import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";

import { CustomHeader } from "@components/header-custom";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";
import SettingsScreen from "@screens/settings";

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
          header: () => <CustomHeader title="Settings" hasAvatar={false} />,
        }}
      />
    </Stack.Navigator>
  );
}
