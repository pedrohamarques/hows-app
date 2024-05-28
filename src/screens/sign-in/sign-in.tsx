import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";

import { hp, wp } from "@utils/dimensions";
import { CustomInput } from "@components/input-custom";
import { useSignInScreen } from "./sign-in.hook";
import { Loading } from "@components/loading";

export function SignInScreen() {
  const {
    handleSignUpPress,
    handlePasswordToggle,
    isPasswordVisible,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    isLoading,
  } = useSignInScreen();
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar style="dark" />

        <ScrollView
          className="gap-12 overflow-visible"
          style={{ paddingHorizontal: wp(5) }}
          contentContainerStyle={{ flex: 1, justifyContent: "center" }}
        >
          <View className="items-center">
            <Image
              source={require("@assets/login.png")}
              style={{ height: hp(25) }}
              resizeMode="contain"
            />
          </View>

          <View className="">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wider text-center text-neutral-800 mb-10"
            >
              Sign In
            </Text>

            <CustomInput
              icon="mail"
              placeholder="Email address"
              testID="screens.sign-in.custom-input.email"
              containerStyle="mb-4"
              value={email}
              onChangeText={setEmail}
            />
            <View>
              <CustomInput
                icon="lock"
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                testID="screens.sign-in.custom-input.password"
                secureTextEntry={!isPasswordVisible}
              >
                <TouchableOpacity
                  onPress={handlePasswordToggle}
                  className="flex-1"
                >
                  <Octicons
                    name={isPasswordVisible ? "eye-closed" : "eye"}
                    size={hp(2.7)}
                    color="gray"
                  />
                </TouchableOpacity>
              </CustomInput>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-right text-neutral-500 tracking-wider mt-3"
                >
                  Forgot password?{" "}
                </Text>
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <View className="flex-row justify-center mt-6">
                <Loading size={hp(7)} />
              </View>
            ) : (
              <TouchableOpacity
                className="bg-indigo-500 rounded-xl justify-center items-center mt-6"
                style={{ height: hp(6.4) }}
                onPress={handleLogin}
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            )}

            <View className="flex-row justify-center my-6">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Don't have an account?{" "}
              </Text>

              <Pressable onPress={handleSignUpPress}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
