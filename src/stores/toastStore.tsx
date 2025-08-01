import { create } from 'zustand';

export type ToastType = 'default' | 'success' | 'error';

interface ToastState {
  message: string | null;
  type: ToastType;
  show: boolean;

  showToast: (msg: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
	message: null,
	type: 'default',
	show: false,

	showToast: (message, type = 'default') => {
		set({ message, type, show: true });

		setTimeout(() => {
			set({ show: false });
		}, 3000);
	},

	hideToast: () => set({ show: false }),
}));