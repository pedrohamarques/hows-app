import { useAuthContext } from "@contexts/auth-context";
import { Alert } from "react-native";

export function useSettingsScreen() {
  const { logout } = useAuthContext();

  function handleLogout() {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Yes", style: "destructive", onPress: logout },
      { text: "Cancel", style: "cancel" },
    ]);
  }
  return {
    handleLogout,
  };
}
