import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { hp } from "@utils/dimensions";

type SettingsItemProps = TouchableOpacityProps & {
  testID?: string;
  icon: keyof typeof Octicons.glyphMap;
  title: string;
  isNavigating?: boolean;
};

export function SettingsItem({
  icon,
  title,
  testID = "screens.settings.components.settings-item",
  isNavigating = false,
  ...rest
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      {...rest}
      testID={testID}
      className="flex-row bg-gray-50 p-5 items-center justify-between"
    >
      <View className="flex-row items-center space-x-4">
        <Octicons name={icon} size={hp(3)} color="rgb(129 140 248)" />
        <Text
          style={{ fontSize: hp(2) }}
          className="tracking-wider text-gray-600 font-semibold"
        >
          {title}
        </Text>
      </View>
      {isNavigating && (
        <View className="mr-2">
          <Octicons name="chevron-right" size={hp(2)} color="gray" />
        </View>
      )}
    </TouchableOpacity>
  );
}
