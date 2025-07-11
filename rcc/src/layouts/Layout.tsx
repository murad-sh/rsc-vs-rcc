import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { SWRConfig } from 'swr';

import axiosInstance from '@/lib/axios-instance';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header />
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            axiosInstance.get(url).then((res) => res.data),
        }}
      >
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </SWRConfig>
      <Toaster richColors className="mb-14" />
      <Footer />
    </div>
  );
};

export default Layout;
