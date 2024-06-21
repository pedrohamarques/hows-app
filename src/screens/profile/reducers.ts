export enum ActionKind {
  IS_EDITING_USERNAME = "IS_EDITING_USERNAME",
  IS_EDITING_AVATAR = "IS_EDITING_AVATAR",
  SAVING = "SAVING",
}

type EditingAvatarAction = {
  type: ActionKind.IS_EDITING_AVATAR;
  payload: string;
};

type EditingUsernameAction = {
  type: ActionKind.IS_EDITING_USERNAME;
  payload: string;
};

type SavingAction = {
  type: ActionKind.SAVING;
};

type Action = EditingAvatarAction | EditingUsernameAction | SavingAction;

export type ProfileDataState = {
  username: string | undefined | null;
  avatar: string | null | undefined;
  isEditing: boolean;
};

export function editingProfileReducer(
  state: ProfileDataState,
  action: Action
): ProfileDataState {
  switch (action.type) {
    case ActionKind.IS_EDITING_AVATAR:
      return {
        ...state,
        isEditing: true,
        avatar: action.payload,
      };
    case ActionKind.IS_EDITING_USERNAME:
      return {
        ...state,
        isEditing: true,
        username: action.payload,
      };
    case ActionKind.SAVING:
      return {
        ...state,
        isEditing: false,
      };
    default:
      return state;
  }
}
