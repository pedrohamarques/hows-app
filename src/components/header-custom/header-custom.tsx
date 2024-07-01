import { Text, View, Platform, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { blurhash } from "@constants/image-hash";

import { hp } from "@utils/dimensions";

import { useCustomHeader } from "./header-custom.hook";
import { BackButton } from "@components/back-button";

const isIos = Platform.OS === "ios";

type CustomHeaderProps = {
  title: string;
  testID?: string;
  hasAvatar?: boolean;
  canGoBack?: boolean;
};

export function CustomHeader({
  title,
  testID = "components.header-custom",
  hasAvatar = true,
  canGoBack = false,
}: CustomHeaderProps) {
  const { top } = useSafeAreaInsets();
  const { user, handleAvatarPress } = useCustomHeader();

  return (
    <View
      style={{ paddingTop: isIos ? top : top + 10 }}
      className="flex-row justify-between items-center px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow"
      testID={testID}
    >
      <View className="flex-row justify-center items-center">
        {canGoBack && (
          <View className="mr-4">
            <BackButton testID="components.header-custom.back-button" />
          </View>
        )}
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          {title}
        </Text>
      </View>

      {hasAvatar && (
        <TouchableOpacity onPress={handleAvatarPress}>
          <Image
            testID="components.header-custom.image-avatar"
            transition={500}
            style={{ height: hp(3), aspectRatio: 1, borderRadius: 100 }}
            placeholder={blurhash}
            source={
              user?.photoURL
                ? user.photoURL
                : require("@assets/empty-image.png")
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
