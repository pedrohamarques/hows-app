export type UserCredentials = {
  email: string;
  password: string;
};

export type FirebaseUserDatabase = UserCredentials & {
  id: string;
  username: string;
  photoUrl?: string;
};
