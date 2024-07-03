import { useEffect, useState } from "react";

import { useSocketContext } from "@contexts/socket-context";
import { GroupChatProp } from "@typings/chat";

export function useGroupScreen() {
  const [chatGroups, setChatGroups] = useState<GroupChatProp[] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("");

  const { socket } = useSocketContext();

  function handleToggleCreateButton() {
    setIsModalVisible((previousState) => !previousState);
  }

  function handleCreateGroup() {
    socket?.emit("createNewGroup", groupName.trim());
    setGroupName("");
    setIsModalVisible(false);
  }

  useEffect(() => {
    if (socket && !isModalVisible) {
      socket.emit("getAllGroups");

      socket.on("groupList", (groups) => setChatGroups(groups));
    }
  }, [socket, isModalVisible]);

  return {
    handleToggleCreateButton,
    isModalVisible,
    handleCreateGroup,
    groupName,
    setGroupName,
    chatGroups,
  };
}
