import { useToastStore } from '@/stores/toastStore';

export const toast = {
	default: (msg: string) => useToastStore.getState().showToast(msg, 'default'),
	success: (msg: string) => useToastStore.getState().showToast(msg, 'success'),
	error: (msg: string) => useToastStore.getState().showToast(msg, 'error'),
};