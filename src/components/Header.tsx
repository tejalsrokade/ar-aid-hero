import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedName = localStorage.getItem("userName") || "";
    setIsLoggedIn(loggedIn);
    setUserName(storedName);
  }, []);

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <>
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
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-foreground font-medium">
                  Welcome, {userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Signup/Login
              </button>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;
