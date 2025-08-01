import { useDialogStore } from '@/stores/dialogStore';

export const useDialog = () => {
	const { isOpen, openDialog, closeDialog, toggleDialog } = useDialogStore();
	
	return { isOpen, openDialog, closeDialog, toggleDialog };
};