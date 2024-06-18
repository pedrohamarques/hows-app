import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { hp } from "@utils/dimensions";

import { Header } from "./components/header";
import { MessageList } from "./components/message-list";
import { useChatRoomScreen } from "./chat-room.hook";

export function ChatRoomScreen() {
  const {
    userInfo,
    messages,
    messageText,
    setMessageText,
    handleSendMessage,
    scrollViewChatRef,
  } = useChatRoomScreen();

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={{ bottom: "off", top: "maximum" }}
    >
      <StatusBar style="dark" />
      <Header testID="screens.chat-room" userInfo={userInfo} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="bg-neutral-100"
          bounces={false}
          contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
        >
          <View className="flex-1">
            <MessageList
              messages={messages}
              testID="screens.chat-room.message-list"
              targetUser={userInfo}
              scrollRef={scrollViewChatRef}
            />
          </View>
          <View style={{ marginBottom: hp(2.7) }} className="pt-2">
            <View className="flex-row justify-between mx-3 bg-white border p-2 border-neutral-300 rounded-full pl-5">
              <TextInput
                placeholder="Type Message"
                className="flex-1 mr-2"
                style={{ fontSize: hp(2) }}
                onChangeText={setMessageText}
                value={messageText}
                returnKeyType="send"
                enablesReturnKeyAutomatically
                onSubmitEditing={handleSendMessage}
              />
              <TouchableOpacity
                className="bg-neutral-200 p-2 mr-[1px] rounded-full"
                onPress={handleSendMessage}
              >
                <Feather name="send" size={hp(2)} color="#737373" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
