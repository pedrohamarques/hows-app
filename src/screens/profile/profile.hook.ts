import { useReducer, useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "@services/firebaseConfig";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { z } from "zod";

import { useAuthContext } from "@contexts/auth-context";
import {
  ActionKind,
  ProfileDataState,
  editingProfileReducer,
} from "./reducers";

import { formatImagePath } from "@utils/format";

export function useProfileScreen() {
  const { user, updateUserData } = useAuthContext();

  const usernameSchema = z.string().min(3);

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
  const [isSaving, setIsSaving] = useState(false);

  function handleEditPress() {
    setIsUsernameEditable((previousState) => !previousState);
  }

  async function handleImagePress() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
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

  async function uploadImageAsync(uri: string) {
    const dateTime = new Date().toISOString();
    const storageRef = ref(
      getStorage(),
      `avatars/${formatImagePath(uri)}${dateTime}`
    );

    const response = await fetch(uri);
    const imageBlob = await response.blob();
    const snapshot = await uploadBytesResumable(storageRef, imageBlob, {
      contentType: "image/jpeg",
    });

    const downloadUrl = await getDownloadURL(snapshot.ref);

    return downloadUrl;
  }

  async function handleSavePress() {
    dispatch({ type: ActionKind.SAVING });
    setIsSaving(true);
    const { error } = usernameSchema.safeParse(profileState.username);

    if (error) {
      return Alert.alert(
        "Error",
        "Username must be at least 3 characters long"
      );
    }

    try {
      const publicImageUrl = await uploadImageAsync(
        profileState.avatar as string
      );
      await updateDoc(doc(database, "users", user!.uid!), {
        photoUrl: publicImageUrl,
      });
      await updateUserData();

      setIsSaving(false);

      Alert.alert("Success", "Avatar uploaded successfully!");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        console.log(error);
      }
    }
  }

  return {
    handleEditPress,
    handleImagePress,
    handleChangeUsername,
    handleSavePress,
    isUsernameEditable,
    user,
    profileState,
    isSaving,
  };
}
