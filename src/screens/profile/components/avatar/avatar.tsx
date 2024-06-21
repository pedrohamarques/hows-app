import { Image, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { hp } from "@utils/dimensions";

type AvatarProps = {
  testID?: string;
  onImagePress: () => void;
  image: string | null | undefined;
};

export function Avatar({
  testID = "screens.profile.components.avatar",
  onImagePress,
  image,
}: AvatarProps) {
  return (
    <View testID={testID} className="m-10 flex justify-center items-center">
      <View className="w-48 h-48 rounded-full bg-black items-end">
        <TouchableOpacity
          className="z-20 rounded-full h-10 w-10 bg-gray-900 justify-center items-center absolute"
          onPress={onImagePress}
        >
          <Feather name="camera" size={hp(3)} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="flex justify-center items-center z-10 absolute"
        onPress={onImagePress}
        activeOpacity={0.8}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            className="flex w-44 h-44 rounded-full justify-center items-center z-10 absolute overflow-hidden"
          />
        ) : (
          <Image
            className="flex w-44 h-44 rounded-full bg-neutral-400 justify-center items-center z-10 absolute"
            source={require("@assets/empty-image.png")}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

// {image ? (
//   <Image
//     source={{ uri: image }}
//     className="flex  h-44 rounded-full justify-center items-center z-10 absolute"
//   />
// ) : (
//   <Feather name="camera" size={hp(4)} color="white" />
// )}
