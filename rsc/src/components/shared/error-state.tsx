'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const ErrorState = ({ errorLabel }: { errorLabel: string }) => {
  const router = useRouter();

  return (
    <section className="container flex-1 content-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{errorLabel}</h1>
        <Button size="lg" onClick={() => router.refresh()}>
          Retry
        </Button>
      </div>
    </section>
  );
};

export default ErrorState;
