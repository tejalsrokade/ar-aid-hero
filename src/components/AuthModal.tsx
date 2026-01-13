import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

const AuthModal = ({ isOpen, onClose, onLogin }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in all fields");
      return;
    }
    // Simulate login - store in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", email.split("@")[0]);
    onLogin(email.split("@")[0]);
    resetForm();
    onClose();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill in all fields");
      return;
    }
    // Simulate signup success
    setMessage("Account created successfully! Please login.");
    resetForm();
    setTimeout(() => {
      setMode("login");
      setMessage("");
    }, 1500);
  };

  const switchMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm text-center ${
            message.includes("success") 
              ? "bg-green-500/10 text-green-600 dark:text-green-400" 
              : "bg-destructive/10 text-destructive"
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-input"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Email ID
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-button">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-primary hover:underline font-medium"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
