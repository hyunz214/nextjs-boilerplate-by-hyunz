import { useToastStore } from '@/stores/toastStore';

export const useToast = () => {
	const { message, type, show, showToast, hideToast } = useToastStore();

	return { message, type, show, showToast, hideToast };
};