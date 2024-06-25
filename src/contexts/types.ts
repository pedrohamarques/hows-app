import { UserCredentials } from "@typings/authentication";
import { User, UserCredential } from "firebase/auth";

export type UserWithImage = User & {
  imageUrl?: string | null;
};

export type AuthContextProps = {
  login: ({ email, password }: UserCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: ({ email, password }: UserCredentials) => Promise<UserCredential>;
  updateUserData: () => Promise<void>;
  user: UserWithImage | null;
  isLoaded: boolean;
};
