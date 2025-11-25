// app/login/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | CheekyEscapes",
  description: "Sign in to your account",
};

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // You can wrap in a div for styling if you want
  return <>{children}</>;
}
