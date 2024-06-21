import { useEffect, useReducer, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { useAuthContext } from "@contexts/auth-context";
import {
  ActionKind,
  ProfileDataState,
  editingProfileReducer,
} from "./reducers";

export function useProfileScreen() {
  const { user } = useAuthContext();

  const initialProfileState: ProfileDataState = {
    avatar: user?.photoURL,
    isEditing: false,
    username: user?.displayName,
  };

  const [profileState, dispatch] = useReducer(
    editingProfileReducer,
    initialProfileState
  );

  const [isUsernameEditable, setIsUsernameEditable] = useState(false);

  function handleEditPress() {
    setIsUsernameEditable((previousState) => !previousState);
  }

  async function handleImagePress() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      dispatch({
        type: ActionKind.IS_EDITING_AVATAR,
        payload: result.assets[0].uri,
      });
    }
  }

  function handleChangeUsername(username: string) {
    dispatch({ type: ActionKind.IS_EDITING_USERNAME, payload: username });
  }

  function handleSavePress() {
    console.log("pressed");
  }

  useEffect(() => {}, []);

  return {
    handleEditPress,
    handleImagePress,
    handleChangeUsername,
    handleSavePress,
    isUsernameEditable,
    user,
    profileState,
  };
}
