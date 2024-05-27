import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export function hp(heightPercentage: number) {
  return (height * heightPercentage) / 100;
}

export function wp(widthPercentage: number) {
  return (width * widthPercentage) / 100;
}
