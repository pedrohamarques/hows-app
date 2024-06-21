import { TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { CustomInput } from "@components/input-custom";
import { CustomButton } from "@components/button-custom";

import { hp } from "@utils/dimensions";

import { useProfileScreen } from "./profile.hook";
import { Avatar } from "./components/avatar";

export function ProfileScreen() {
  const {
    handleEditPress,
    handleImagePress,
    handleChangeUsername,
    handleSavePress,
    isUsernameEditable,
    user,
    profileState,
  } = useProfileScreen();
  return (
    <View className="flex-1 justify-between items-center bg-white">
      <View>
        <Avatar
          testID="screens.profile.avatar"
          onImagePress={handleImagePress}
          image={profileState.avatar}
        />
        <View>
          <CustomInput
            icon="person"
            placeholder="Username"
            testID="screens.sign-in.custom-input.username"
            containerStyle={`mb-4 ${
              isUsernameEditable && "bg-indigo-400 border-indigo-700"
            }`}
            value={profileState.username!}
            autoCapitalize="none"
            autoCorrect={false}
            editable={isUsernameEditable}
            onChangeText={handleChangeUsername}
          >
            <TouchableOpacity onPress={handleEditPress} className="flex-1">
              <Octicons
                name="pencil"
                size={hp(2.7)}
                color={isUsernameEditable ? "white" : "rgb(129, 140, 248)"}
              />
            </TouchableOpacity>
          </CustomInput>

          <CustomInput
            icon="mail"
            testID="screens.profile.custom-input.email"
            containerStyle="mb-4"
            value={user!.email!}
            editable={false}
          />
        </View>
      </View>

      <View className="mb-8 w-full px-4 self-end">
        <CustomButton
          text="Save Changes"
          testID="screens.profile.custom-button.save"
          onPress={handleSavePress}
          disabled={!profileState.isEditing}
        />
      </View>
    </View>
  );
}
