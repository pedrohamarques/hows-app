import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "@contexts/auth-context";

import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";

import LoadingScreen from "./components/loading-screen";

export default function Routes() {
  const { user, isLoaded } = useAuthContext();

  return (
    <NavigationContainer>
      {!isLoaded ? (
        <LoadingScreen testID="routes.navigation.loading-screen" />
      ) : user ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </NavigationContainer>
  );
}
