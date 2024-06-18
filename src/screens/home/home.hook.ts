import { useEffect, useState } from "react";
import { getDocs, query, where } from "firebase/firestore";

import { useAuthContext } from "@contexts/auth-context";

import { usersCollection } from "@services/firebaseConfig";

import { FirebaseUserDatabase } from "@typings/authentication";

export function useHomeScreen() {
  const { user } = useAuthContext();
  const [users, setUsers] = useState<FirebaseUserDatabase[]>([]);

  async function handleFetchUsers() {
    const data: FirebaseUserDatabase[] = [];

    const q = query(usersCollection, where("id", "!=", user?.uid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({ ...(doc.data() as FirebaseUserDatabase) });
    });

    setUsers(data);
  }

  useEffect(() => {
    if (user?.uid) {
      handleFetchUsers();
    }
  }, []);

  return {
    users,
  };
}
