"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "Nmwjxg.bqGXNw:PIBucgCAYT5e4FsV9ojf8Q4YwwTlfLBvo2yJ5aTLT1s",
  });
  return <ChatBox />;
}
