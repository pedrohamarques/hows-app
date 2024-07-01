import { View } from "react-native";

type DividerProps = {
  testID?: string;
};

export function Divider({ testID = "components.divider" }: DividerProps) {
  return (
    <View className="border-b border-b-neutral-200 mx-2" testID={testID} />
  );
}
