import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="container flex justify-center items-center flex-1">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl mb-8">Whoops! That page doesn&apos;t exist.</p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </section>
  );
}
