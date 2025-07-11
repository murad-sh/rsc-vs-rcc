export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-4">
        <p className="text-center text-base leading-loose text-slate-800 dark:text-slate-50">
          &copy; {currentYear} by{' '}
          <a
            className="font-medium underline underline-offset-4 text-primary"
            href="https://github.com/murad-sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Murad Shahbazov
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
