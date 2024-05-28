import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export default function PrivateRoutes() {
  const Stack = createNativeStackNavigator<PrivateRoutesParams>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PRIVATE_ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
