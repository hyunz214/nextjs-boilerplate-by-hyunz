import { useDialogStore } from '@/stores/dialogStore';

export const dialog = {
	open: () => useDialogStore.getState().openDialog(),
	close: () => useDialogStore.getState().closeDialog(),
	toggle: () => useDialogStore.getState().toggleDialog(),
};