import create, { State } from 'zustand';

interface ModalState extends State {
  isModal: boolean;
  setModal: (tok: boolean) => void;
}

export const useModal = create<ModalState>((set) => ({
  isModal: false,
  setModal: (tok) => set(() => ({ isModal: tok })),
}));
