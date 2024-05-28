import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { z } from "zod";

import { useAuthContext } from "@contexts/auth-context";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";
import { setDoc, doc } from "firebase/firestore";
import { database } from "@services/firebaseConfig";

export function useSignUpScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register } = useAuthContext();

  const registerSchema = z.object({
    username: z.string().min(3),
    email: z.string().email().min(3),
    password: z.string().min(8),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handleSignInPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
  }

  async function handleSignUp() {
    const validation = registerSchema.safeParse({ email, password, username });

    if (validation.error) {
      Alert.alert(
        "Error",
        "There was some error with your input data. Please try again."
      );
    } else {
      setIsLoading(true);

      try {
        const response = await register({ email, password });
        await setDoc(doc(database, "users", response.user.uid), {
          id: response.user.uid,
          email,
          username,
          password,
        });
      } catch (error: any) {
        Alert.alert("Error", error.message);
      }
    }
    setIsLoading(false);
  }

  function handlePasswordToggle() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  return {
    isLoading,
    handleSignInPress,
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    handlePasswordToggle,
    handleSignUp,
    username,
    setUsername,
  };
}
