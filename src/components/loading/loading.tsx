import LottieView from "lottie-react-native";
import { View } from "react-native";

type LoadingProps = {
  testID?: string;
  size: number;
};

export function Loading({ testID = "components.loading", size }: LoadingProps) {
  return (
    <View style={{ height: size, aspectRatio: 1 }} testID={testID}>
      <LottieView
        style={{ flex: 1 }}
        source={require("./loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}
