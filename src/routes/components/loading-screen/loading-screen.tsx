import { View } from "react-native";

import { Loading } from "@components/loading";

type LoadingScreenProps = {
  testID?: string;
};

export function LoadingScreen({
  testID = "routes.components.loading-screen",
}: LoadingScreenProps) {
  return (
    <View className="flex-1 justify-center items-center" testID={testID}>
      <Loading size={80} />
    </View>
  );
}
