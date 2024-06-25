import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useBackButton } from "./back-button.hook";
import { hp } from "@utils/dimensions";

type BackButtonProps = {
  testID?: string;
};

export function BackButton({
  testID = "components.back-button",
}: BackButtonProps) {
  const { handleGoBack } = useBackButton();

  return (
    <TouchableOpacity testID={testID} onPress={handleGoBack}>
      <Feather
        name="chevron-left"
        size={hp(3)}
        color="white"
        testID="components.back-button.chevron-left"
      />
    </TouchableOpacity>
  );
}
