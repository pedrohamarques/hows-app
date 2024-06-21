import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  customStyles?: string;
  text: string;
};

export function CustomButton({
  testID = "components.button-custom",
  customStyles,
  text,
  disabled,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      className={`py-4 w-full items-center rounded-2xl ${customStyles} ${
        disabled ? "bg-neutral-200" : "bg-indigo-400"
      }`}
    >
      <Text
        className={`font-semibold text-xl ${
          disabled ? "text-neutral-700" : "text-white"
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
