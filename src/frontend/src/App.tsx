import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { createContext, useCallback, useContext, useState } from "react";
import type { UseCase } from "./backend";
import VerificationScreen from "./components/VerificationScreen";
import BankingPage from "./pages/BankingPage";
import ContentPage from "./pages/ContentPage";
import GamblingPage from "./pages/GamblingPage";
import HomePage from "./pages/HomePage";

export interface VerificationState {
  phoneNumber: string;
  useCase: UseCase;
  onComplete: () => void;
}

interface VerificationContextType {
  startVerification: (state: VerificationState) => void;
}

export const VerificationContext = createContext<VerificationContextType>({
  startVerification: () => {},
});

export function useVerification() {
  return useContext(VerificationContext);
}

function RootLayout() {
  const [verification, setVerification] = useState<VerificationState | null>(
    null,
  );

  const startVerification = useCallback((state: VerificationState) => {
    setVerification(state);
  }, []);

  const handleComplete = useCallback(() => {
    if (verification) {
      const cb = verification.onComplete;
      setVerification(null);
      cb();
    }
  }, [verification]);

  return (
    <VerificationContext.Provider value={{ startVerification }}>
      <Outlet />
      {verification && (
        <VerificationScreen
          phoneNumber={verification.phoneNumber}
          useCase={verification.useCase}
          onComplete={handleComplete}
        />
      )}
      <Toaster />
    </VerificationContext.Provider>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const bankingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/banking",
  component: BankingPage,
});

const gamblingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gambling",
  component: GamblingPage,
});

const contentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/content",
  component: ContentPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  bankingRoute,
  gamblingRoute,
  contentRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

export default function App() {
  return <RouterProvider router={router} />;
}
