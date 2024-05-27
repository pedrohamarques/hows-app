import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "@screens/sign-in";
import SignUpScreen from "@screens/sign-up";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

export default function PublicRoutes() {
  const Stack = createNativeStackNavigator<PublicRoutesParams>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PUBLIC_ROUTES.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={PUBLIC_ROUTES.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
