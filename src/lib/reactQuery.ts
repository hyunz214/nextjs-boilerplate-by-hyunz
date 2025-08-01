import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { toast } from '@/lib/toast';

export const queryClient = new QueryClient({
	defaultOptions:{
		queries: {
			staleTime: 60 * 1000, // 1분
			refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
		},
	},
	queryCache: new QueryCache({
		onError: (error) => {
			console.error('전역 쿼리 에러:', error);
			toast.error('오류가 발생했습니다.');
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			console.error('전역 뮤테이션 에러:', error);
			toast.error('오류가 발생했습니다.');
		},
	}),
});

