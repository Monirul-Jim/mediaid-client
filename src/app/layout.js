import { ContextProvider } from "@/provider/contextProvider";
import ReduxProvider from "@/provider/reduxProvider";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SessionProvider from "../provider/sessionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediaid BD | Doctors Need",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <ContextProvider>
          <ReduxProvider>
            <SessionProvider>{children}</SessionProvider>
          </ReduxProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
