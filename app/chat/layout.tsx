import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import ChatLayoutWrapper from "./_components/chat-layout-wrapper";
import React from "react";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // user infomation

  const preloadUserInfo = await preloadQuery(api.users.readUser, {
    userId: userId!,
  });
  // chat logs
  const preloadedConversations = await preloadQuery(api.chats.getConversation, {
    userId: userId!,
  });
  // preloaded chats

  return (
    <ChatLayoutWrapper
      preloadedUserInfo={preloadUserInfo}
      preloadedConversations={preloadedConversations}
    >
      {children}
    </ChatLayoutWrapper>
  );
}
