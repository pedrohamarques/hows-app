import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "@contexts/auth-context";

import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";

export default function Routes() {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {!user ? <PublicRoutes /> : <PrivateRoutes />}
    </NavigationContainer>
  );
}
