import { useStore, type THEME } from "@/store/useStore";
import { createContext, useContext, useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: THEME;
};

type ThemeProviderState = {
  theme: THEME;
  setTheme: (theme: THEME) => void;
};

// Create context with placeholder, will be overwritten in provider
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  // ✅ Zustand hook must be inside the component
  const { theme, setTheme } = useStore();

  // Load default theme from storage or system
  useEffect(() => {
    let savedTheme: THEME | null = null;

    if (!savedTheme) {
      setTheme(defaultTheme);
    } else {
      setTheme(savedTheme);
    }
  }, [defaultTheme, setTheme]);

  // Update <html> class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let appliedTheme = theme;

    if (theme === "system") {
      appliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.classList.add(appliedTheme);
  }, [theme]);

  const value: ThemeProviderState = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// ✅ Custom hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
