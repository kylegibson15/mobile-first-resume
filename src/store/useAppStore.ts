import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme:
        typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark',
      toggleTheme: () =>
        set((state) => {
          const next = state.theme === 'dark' ? 'light' : 'dark';
          document.documentElement.classList.toggle('dark', next === 'dark');
          document.documentElement.classList.toggle('light', next === 'light');
          return { theme: next };
        }),
    }),
    { name: 'portfolio-theme' },
  ),
);
