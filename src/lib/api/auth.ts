import client from '@/lib/api/client';
import { LoginSchemaType } from '@/lib/schemas/authSchema';
import { ApiResponse } from '@/types/api';

interface LoginResult {
  accessToken: string;
  refreshToken: string;
}

export const login = async (loginData: LoginSchemaType): Promise<ApiResponse<LoginResult>> => {
	const response = await client.post<ApiResponse<LoginResult>>('/auth/login', loginData);
	return response.data;
};