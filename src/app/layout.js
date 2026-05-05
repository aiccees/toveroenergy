import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { NavigationContextProvider } from "../context/navContext";
import ToastContainer from "../utils/toast";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tovero Energy",
  description: "Tovero Energy Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavigationContextProvider>
          <MainLayout>
            {children}
          </MainLayout>
          <ToastContainer />
        </NavigationContextProvider>
      </body>
    </html>
  );
}
