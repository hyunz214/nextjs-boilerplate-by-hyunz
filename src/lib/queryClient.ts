import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { useToastStore } from '@/stores/toastStore';
import { CustomError } from '@/types/api';

export const queryClient = new QueryClient({
	defaultOptions:{
		queries: {
			staleTime: 60 * 1000, // 1분
			refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
		},
	},
	queryCache: new QueryCache({
		onError: (error) => {
			const { showToast } = useToastStore.getState();;
			console.error('전역 쿼리 에러:', error);
			const customError = error as CustomError;

			// 에러 객체의 config에 showToast 플래그가 true일 경우에만 Toast 호출
			if (customError.config?.showToast !== false) {
				console.error('전역 쿼리 에러:', customError);
				showToast('오류가 발생했습니다.', 'error');
			}

		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			const { showToast } = useToastStore.getState();
			console.error('전역 뮤테이션 에러:', error);
			const customError = error as CustomError;

			// 에러 객체의 config에 showToast 플래그가 true일 경우에만 Toast 호출
			if (customError.config?.showToast !== false) {
				console.error('전역 쿼리 에러:', customError);
				showToast('오류가 발생했습니다.', 'error');
			}
		},
	}),
});

