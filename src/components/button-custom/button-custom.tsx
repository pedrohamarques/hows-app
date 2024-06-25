import { Loading } from "@components/loading";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  customStyles?: string;
  text: string;
  loading?: boolean;
};

export function CustomButton({
  testID = "components.button-custom",
  customStyles,
  text,
  disabled,
  loading = false,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      className={`py-4 w-full items-center rounded-2xl ${customStyles} ${
        disabled ? "bg-neutral-200" : "bg-indigo-400"
      }`}
      {...rest}
    >
      {!loading ? (
        <Text
          className={`font-semibold text-xl ${
            disabled ? "text-neutral-700" : "text-white"
          }`}
        >
          {text}
        </Text>
      ) : (
        <Loading size={24} testID="components.button-custom.loading" />
      )}
    </TouchableOpacity>
  );
}
