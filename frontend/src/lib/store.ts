import { create } from "zustand";

type Store = {
  zenMode: boolean;
  toggleZenMode: (value: boolean) => void;
};

export const useStore = create<Store>()((set) => {
  return {
    zenMode: false,
    toggleZenMode(value) {
      set(() => ({ zenMode: value }));
    },
  };
});
