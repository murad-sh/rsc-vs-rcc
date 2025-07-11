import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header />
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <Toaster richColors className="mb-14" />
      <Footer />
    </div>
  );
}
