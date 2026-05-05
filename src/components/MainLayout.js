'use client';

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const isAicceesPage = pathname.includes('/aiccees');

  return (
    <>
      {!isAicceesPage && <Header />}
      {children}
      {!isAicceesPage && <Footer />}
    </>
  );
} 