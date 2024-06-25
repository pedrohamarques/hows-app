import { Timestamp } from "firebase/firestore";

export type MessageProps = {
  createdAt: Timestamp;
  profileUrl: string | null;
  senderName: string | null;
  text: string;
  userId: string;
};
