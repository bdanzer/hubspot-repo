export interface IMessage {
  readonly fromUserId: number;
  readonly toUserId: number;
  readonly timestamp: number;
  readonly content: string;
}

export interface IUser {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly avatar: string;
}

export interface APIResponse {
  readonly userId: number;
  readonly messages: IMessage[];
  readonly users: IUser[];
}

export interface IConversation {
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly mostRecentMessage: {
    readonly content: string;
    readonly timestamp: number;
    readonly userId: number;
  };
  readonly totalMessages: number;
  readonly userId: number;
}

export interface IConversationsReturnType {
  readonly conversations: IConversation[];
}
