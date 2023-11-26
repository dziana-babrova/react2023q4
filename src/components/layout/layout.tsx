import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="app-content app-wrapper">{children}</main>
      <Footer />
    </>
  );
};
