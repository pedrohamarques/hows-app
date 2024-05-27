import React, { useState, useEffect, createContext, useContext } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { FIREBASE_AUTH } from "@services/firebaseConfig";

import { UserCredentials } from "@typings/authentication";
import { Alert } from "react-native";

type AuthContextProps = {
  login: ({ email, password }: UserCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: ({ email, password }: UserCredentials) => Promise<void>;
  user: User | undefined;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User | undefined>(undefined);

  async function login({ email, password }: UserCredentials) {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      setUser(response.user);
    } catch (error) {
      Alert.alert(
        "Error",
        "There was some problem while logging in. Please try again later."
      );
    }
  }

  async function register({ email, password }: UserCredentials) {
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      setUser(response.user);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    user,
    login,
    logout,
    register,
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);

      if (user) {
        console.log("User is Logged In!");
      } else {
        console.log("User is not Logged In!");
      }
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useSession must be wrapped in a <AuthProvider />");
  }

  return value;
}
