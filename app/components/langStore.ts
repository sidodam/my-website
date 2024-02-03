import { create } from "zustand";

interface LangState {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

const useLangStore = create<LangState>((set) => ({
  currentLang: "en",
  setCurrentLang: (lang) => set({ currentLang: lang }),
}));

export default useLangStore;
