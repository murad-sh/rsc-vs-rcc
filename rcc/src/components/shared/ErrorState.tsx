import { useNavigate } from 'react-router-dom';

import { Button } from '../ui/button';

const ErrorState = ({ errorLabel }: { errorLabel: string }) => {
  const navigate = useNavigate();

  return (
    <section className="container flex-1 content-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{errorLabel}</h1>
        <Button size="lg" onClick={navigate.bind(null, 0)}>
          Retry
        </Button>
      </div>
    </section>
  );
};

export default ErrorState;
