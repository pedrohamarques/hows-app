import { FirebaseUserDatabase } from "./authentication";
import { GroupChatProp } from "./chat";

export enum PUBLIC_ROUTES {
  SIGN_IN = "SignIn",
  SIGN_UP = "SignUp",
}

export enum PRIVATE_ROUTES {
  HOME = "Home",
  SETTINGS = "Settings",
  CHAT_ROOM = "ChatRoom",
  PROFILE = "Profile",
  GROUP = "Group",
  GROUP_CHAT_ROOM = "GroupChatRoom",
}

export type PublicRoutesParams = {
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};

export type PrivateRoutesParams = {
  [PRIVATE_ROUTES.HOME]: undefined;
  [PRIVATE_ROUTES.SETTINGS]: undefined;
  [PRIVATE_ROUTES.CHAT_ROOM]: {
    userData: FirebaseUserDatabase;
  };
  [PRIVATE_ROUTES.PROFILE]: undefined;
  [PRIVATE_ROUTES.GROUP]: undefined;
  [PRIVATE_ROUTES.GROUP_CHAT_ROOM]: {
    groupData: GroupChatProp;
  };
};
