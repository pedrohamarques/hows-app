import { View } from "react-native";

import { Loading } from "@components/loading";

type LoadingScreenProps = {
  testID?: string;
};

export function LoadingScreen({ testID }: LoadingScreenProps) {
  return (
    <View className="flex-1 justify-center items-center" testID={testID}>
      <Loading size={80} />
    </View>
  );
}
