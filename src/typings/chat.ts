export type GroupChatProp = {
  id: number;
  name: string;
  messages: MessageProp[];
  createdAt: Date;
};

export type MessageProp = {
  sendAt: Date;
  senderId: string;
  text: string;
  messageId: string;
};
