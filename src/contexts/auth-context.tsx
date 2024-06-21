import React, { useState, useEffect, createContext, useContext } from "react";
import { Alert } from "react-native";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { FIREBASE_AUTH, database } from "@services/firebaseConfig";

import { UserCredentials } from "@typings/authentication";

import { AuthContextProps, UserWithImage } from "./types";

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<UserWithImage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("Error while creating user.");
    }
  }

  async function logout() {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateUserData(user: User) {
    const docRef = doc(database, "users", user.uid);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && user) {
        const data = docSnap.data();
        setUser({
          ...user,
          displayName: data.username,
          photoURL: data.photoUrl,
        });
      }
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    user,
    login,
    logout,
    register,
    isLoaded,
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user !== null) {
        handleUpdateUserData(user);
        console.log("User is Logged In!");
      } else {
        console.log("User is not Logged In!");
        setUser(null);
        setIsLoaded(true);
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
