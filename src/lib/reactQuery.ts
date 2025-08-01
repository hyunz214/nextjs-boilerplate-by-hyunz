import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // 1분
			refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
		},
	},
});
