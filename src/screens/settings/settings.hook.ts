import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useAuthContext } from "@contexts/auth-context";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

export function useSettingsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateRoutesParams>>();
  const { logout } = useAuthContext();

  function handleLogout() {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Yes", style: "destructive", onPress: logout },
      { text: "Cancel", style: "cancel" },
    ]);
  }

  function handleProfileNavigation() {
    navigation.navigate(PRIVATE_ROUTES.PROFILE);
  }

  function handleGroupNavigation() {
    navigation.navigate(PRIVATE_ROUTES.GROUP);
  }

  return {
    handleLogout,
    handleProfileNavigation,
    handleGroupNavigation,
  };
}
