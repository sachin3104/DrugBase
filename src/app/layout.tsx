"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/UserContext";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [client, setClient] = useState<Ably.Realtime | null>(null);

  useEffect(() => {
    const ablyClient = new Ably.Realtime({
      key: "Nmwjxg.bqGXNw:PIBucgCAYT5e4FsV9ojf8Q4YwwTlfLBvo2yJ5aTLT1s",
    });
    setClient(ablyClient);
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }

  // const client = new Ably.Realtime({
  //   key: "Nmwjxg.bqGXNw:PIBucgCAYT5e4FsV9ojf8Q4YwwTlfLBvo2yJ5aTLT1s",
  // });

  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            <AblyProvider client={client}>
              <ChannelProvider channelName="chat-demo1">
                {children}
              </ChannelProvider>
            </AblyProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
