import { useApiMutation } from './useApi';
import { login } from '@/lib/api/auth';
import { LoginSchemaType } from '@/lib/schemas/authSchema';
import { LoginResponse } from '@/types/auth';
import { useToastStore } from '@/stores/toastStore';

export const useLoginMutation = () => {
	const { showToast } = useToastStore();
	return useApiMutation<LoginResponse, LoginSchemaType>(
		login,
		{
			onSuccess: (data) => {
				console.log('로그인 성공:', data.data);
				showToast('로그인에 성공했습니다.', 'success');
			},
			onError: (error) => {
				console.error('로그인 실패:', error);
			},
		},
	);
};