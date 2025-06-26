import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next",
  description: "next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        모든페이지를 감싸는 레이아웃
        {children}
      </body>
    </html>
  );
}
