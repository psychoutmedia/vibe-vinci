// src/stores/useSettings.ts
import { create } from 'zustand';

type Settings = {
  apiKey: string;
  setApiKey: (key: string) => void;
};

export const useSettings = create<Settings>()((set) => ({
  apiKey: '',
  setApiKey: (apiKey) => set({ apiKey }),
}));