import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SettingsItem } from "./components";
import { useSettingsScreen } from "./settings.hook";

export function SettingsScreen() {
  const { handleLogout } = useSettingsScreen();

  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <SettingsItem
        title="Profile"
        icon="person"
        testID="screens.settings.settings-item.profile"
        isNavigating
      />
      <View className="mb-4">
        <SettingsItem
          title="Logout"
          icon="sign-out"
          onPress={handleLogout}
          testID="screens.settings.settings-item.logout"
        />
      </View>
    </SafeAreaView>
  );
}
