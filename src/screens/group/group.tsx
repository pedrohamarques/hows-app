import { Modal, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@components/loading";
import { CustomButton } from "@components/button-custom";
import { CustomInput } from "@components/input-custom";

import { useGroupScreen } from "./group.hook";

import { ChatList } from "./components/chat-list";

export function GroupScreen() {
  const {
    handleToggleCreateButton,
    isModalVisible,
    handleCreateGroup,
    groupName,
    setGroupName,
    chatGroups,
  } = useGroupScreen();
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {chatGroups && chatGroups.length >= 0 ? (
        <>
          <ChatList
            data={chatGroups}
            testID="screens.group.chat-list"
            isGroup
          />
          <View className="p-10">
            <CustomButton text="Add Group" onPress={handleToggleCreateButton} />
          </View>
        </>
      ) : (
        <View className="flex-1 items-center justify-center ">
          <Loading size={80} testID="screens.group.loading" />
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleToggleCreateButton}
      >
        <View className="flex-1 justify-center items-center mt-5">
          <View className="m-5 bg-white rounded-lg p-6 items-center shadow-md space-y-8">
            <CustomInput
              icon="diamond"
              placeholder="Group name"
              placeholderTextColor="gray"
              editable
              value={groupName}
              onChangeText={setGroupName}
            />
            <View className="flex-row space-x-2 items-center w-[50%]">
              <CustomButton
                onPress={handleToggleCreateButton}
                text="Cancel"
                customStyles="bg-gray-400"
                testID="screens.group.modal.cancel-button"
              />
              <CustomButton
                onPress={handleCreateGroup}
                text="Create"
                testID="screens.group.modal.create-button"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
