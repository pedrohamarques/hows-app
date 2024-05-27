import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "@contexts/auth-context";

import PublicRoutes from "./public-routes";

export default function Routes() {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>{!user ? <PublicRoutes /> : null}</NavigationContainer>
  );
}
