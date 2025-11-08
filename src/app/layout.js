import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chibaraf",
  description: "Sustainable Agriculture Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
