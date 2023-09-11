import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

type Layout = "carousel" | "grid" | "list";

type AppStore = {
  layout: Layout;
  setLayout: (layout: Layout) => void;
};

const initialState = {
  layout: "carousel",
} as const;

export const useAppStore = create<AppStore>()(
  persist(
    set => ({
      ...initialState,
      setLayout: layout => set({layout}),
    }),
    {name: "app-store", storage: createJSONStorage(() => localStorage)},
  ),
);

export const useSelectedLayout = () => useAppStore(s => s.layout);
export const useSetSelectedLayout = () => useAppStore(s => s.setLayout);
