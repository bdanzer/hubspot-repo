import { APIResponse, IConversationsReturnType, IMessage } from "../@types";
import _ from "lodash";

export function processInboxDataMapper(
  inboxData: APIResponse
): IConversationsReturnType {
  const userId = inboxData.userId;
  const messages = inboxData.messages.filter(
    (message) => message.fromUserId !== userId || message.toUserId !== userId
  );
  const users = inboxData.users;

  const groupedConversations = users.map((user) => {
    const recentMessages = _.orderBy(
      messages.filter(
        (message) =>
          message.fromUserId === user.id || message.toUserId === user.id
      ),
      [(obj) => new Date(obj.timestamp)],
      ["desc"]
    );

    const recentMessage = _.head(recentMessages) as IMessage;

    return {
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      mostRecentMessage: {
        content: recentMessage.content,
        timestamp: recentMessage.timestamp,
        userId: recentMessage.fromUserId
      },
      totalMessages: recentMessages.length,
      userId: user.id
    };
  });

  const orderedConversations = _.orderBy(
    groupedConversations,
    [(obj) => new Date(obj.mostRecentMessage.timestamp)],
    ["desc"]
  );

  return { conversations: orderedConversations };
}
