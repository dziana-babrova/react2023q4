import { Footer } from 'components/footer/footer';
import { Header } from 'components/header/header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="app-content app-wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
