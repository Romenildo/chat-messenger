"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext(props: AuthContextProps) {
  return <SessionProvider>{props.children}</SessionProvider>;
}