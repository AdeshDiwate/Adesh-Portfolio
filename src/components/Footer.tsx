export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-footer text-sm">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p>
            Built with <span className="text-accent">React</span>, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
