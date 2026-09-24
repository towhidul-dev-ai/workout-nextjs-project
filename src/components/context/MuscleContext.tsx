"use client";

import React, {
  createContext,
  useState,
  type ReactNode,
} from "react";

import type { IMuscle } from "@/types/muscle.type";

interface IMuscleContext {
  plan: IMuscle[];
  setPlan: React.Dispatch<React.SetStateAction<IMuscle[]>>;
  save: IMuscle[];
  setSave: React.Dispatch<React.SetStateAction<IMuscle[]>>;
}

export const MuscleContext = createContext<IMuscleContext | undefined>(
  undefined
);

const MuscleProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IMuscle[]>([]);
  const [save, setSave] = useState<IMuscle[]>([]);

  return (
    <MuscleContext.Provider
      value={{
        plan,
        setPlan,
        save,
        setSave,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};

export default MuscleProvider;