import {
	useQuery,
	useMutation,
	UseQueryOptions,
	UseMutationOptions,
	QueryKey,
} from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';

// GET 요청을 위한 공통 훅
export const useApiQuery = <TData, TError = unknown>(
	queryKey: QueryKey,
	apiCall: () => Promise<ApiResponse<TData>>,
	options?: UseQueryOptions<ApiResponse<TData>, TError>,
) => {
	return useQuery({
		queryKey,
		queryFn: apiCall,
		...options,
	});
};

// POST, PUT, DELETE 요청을 위한 공통 훅
export const useApiMutation = <TResponse, TPayload, TError = unknown>(
	apiCall: (payload: TPayload) => Promise<ApiResponse<TResponse>>,
	options?: UseMutationOptions<ApiResponse<TResponse>, TError, TPayload>,
) => {
	return useMutation({
		mutationFn: apiCall,
		...options,
	});
};