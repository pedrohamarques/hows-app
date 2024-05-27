import { NavigationContainer } from "@react-navigation/native";

import PublicRoutes from "./public-routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
