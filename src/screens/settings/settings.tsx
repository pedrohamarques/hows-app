import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SettingsItem } from "./components";
import { useSettingsScreen } from "./settings.hook";

export function SettingsScreen() {
  const { handleLogout, handleProfileNavigation, handleGroupNavigation } =
    useSettingsScreen();

  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <View>
        <SettingsItem
          title="Profile"
          icon="person"
          testID="screens.settings.settings-item.profile"
          onPress={handleProfileNavigation}
          isNavigating
        />
        <SettingsItem
          title="Groups"
          icon="diamond"
          testID="screens.settings.settings-item.group"
          onPress={handleGroupNavigation}
          isNavigating
        />
      </View>
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
