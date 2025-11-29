import { create } from "zustand";
import { persist } from "zustand/middleware";

export type THEME = "light" | "dark" | "system";
type CATEGORYTABS = "resume" | "email" | "cover_letter" | string;

export interface IStore {
  theme: THEME;
  setTheme: (t: THEME) => void;
  devCard: boolean;

  categoryTab: CATEGORYTABS;
  setCategoryTabs: (c: CATEGORYTABS) => void;
  setDevCard: (d: boolean) => void;
}

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      theme: "dark",
      categoryTab: "resume",
      devCard: true,

      setTheme: (t: THEME) => set({ theme: t }),
      setCategoryTabs: (c: CATEGORYTABS) => set({ categoryTab: c }),
      setDevCard: (d: boolean) => set({ devCard: d }),
    }),
    { name: "praeviso" }
  )
);
