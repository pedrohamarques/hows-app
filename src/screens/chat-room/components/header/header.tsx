import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

import { hp } from "@utils/dimensions";

import { FirebaseUserDatabase } from "@typings/authentication";

import { blurhash } from "@constants/image-hash";

import { useHeader } from "./header.hook";

type HeaderProps = {
  testID?: string;
  userInfo: FirebaseUserDatabase;
};

export function Header({
  testID = "screens.chat-room.components.header",
  userInfo,
}: HeaderProps) {
  const { handleBackPress } = useHeader();

  return (
    <>
      <View
        testID={testID}
        className="flex-row items-center justify-between space-x-4 px-4"
      >
        <View className="flex-row">
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="chevron-back" size={hp(4)} color="#737373" />
          </TouchableOpacity>
          <View className="flex-row items-center gap-3 px-2">
            <Image
              source={
                userInfo?.photoUrl
                  ? userInfo.photoUrl
                  : require("@assets/empty-image.png")
              }
              placeholder={blurhash}
              style={{ height: hp(3), aspectRatio: 1, borderRadius: 100 }}
            />
            <Text
              style={{ fontSize: hp(2.5) }}
              className="text-neutral-700 font-medium "
            >
              {userInfo.username}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-8">
          <Ionicons name="call" size={hp(3)} color="#737373" />
          <Ionicons name="videocam" size={hp(3)} color="#737373" />
        </View>
      </View>
      <View className="h-3 border-b border-neutral-300" />
    </>
  );
}
