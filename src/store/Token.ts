import create, { State } from 'zustand';

interface TokenState extends State {
  token: string;
  setToken: (tok: string) => void;
}

export const useToken = create<TokenState>((set) => ({
  token: '',
  setToken: (tok) => set(() => ({ token: tok })),
}));
