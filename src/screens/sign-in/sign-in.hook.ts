import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { z } from "zod";

import { useAuthContext } from "@contexts/auth-context";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";
import { Alert } from "react-native";

export function useSignInScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuthContext();

  const loginSchema = z.object({
    email: z.string().email().min(3),
    password: z.string(),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handleSignUpPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
  }

  function handlePasswordToggle() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  async function handleLogin() {
    const response = loginSchema.safeParse({ email, password });

    if (response.error) {
      Alert.alert("Error", "Invalid credentials, please try again.");
    } else {
      setIsLoading(true);
      await login({ email, password });
      setIsLoading(false);
    }
  }

  return {
    handleSignUpPress,
    handlePasswordToggle,
    isPasswordVisible,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    isLoading,
  };
}
