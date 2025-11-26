import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesComponent from "./routerProvider/routes";
import { ThemeProvider } from "./components/custom/theme-provider";
import { Toaster } from "./components/ui/sonner";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Toaster richColors position="top-center" />
      <RoutesComponent />
    </ThemeProvider>
  </StrictMode>
);
