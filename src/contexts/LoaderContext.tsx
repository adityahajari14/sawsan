"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LoaderContextType {
  isLoading: boolean;
  hasLoadedOnce: boolean;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoading: true,
  hasLoadedOnce: false,
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasLoadedOnce(true);
    }, 2000); // 2 seconds display time

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, hasLoadedOnce }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}

