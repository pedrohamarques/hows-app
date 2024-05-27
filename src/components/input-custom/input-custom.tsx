import { PropsWithChildren } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { hp } from "@utils/dimensions";

type InputCustomProps = PropsWithChildren &
  TextInputProps & {
    testID?: string;
    icon: keyof typeof Octicons.glyphMap;
    containerStyle?: string;
  };

export function CustomInput({
  testID = "components.input-custom",
  containerStyle,
  icon,
  children,
  ...rest
}: InputCustomProps) {
  return (
    <View
      testID={testID}
      style={{ height: hp(7) }}
      className={`flex-row px-4 bg-neutral-200 items-center rounded-2xl justify-between ${containerStyle}`}
    >
      <View className="flex-row space-x-4">
        <Octicons name={icon} size={hp(2.7)} color="gray" />
        <TextInput
          style={{ fontSize: hp(2) }}
          className=" font-semibold text-neutral-700  w-[80%]"
          keyboardType="email-address"
          {...rest}
        />
      </View>

      {children}
    </View>
  );
}
