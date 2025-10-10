import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-semibold text-foreground">
          AR-Based First Aid & Emergency Training System
        </h1>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#training" className="text-foreground hover:text-primary transition-colors font-medium">
            Training Library
          </a>
          <a href="#signup" className="text-foreground hover:text-primary transition-colors font-medium">
            Signup/Login
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
