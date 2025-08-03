import { AxiosError } from 'axios';

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

// 기본 API 응답 에러 타입
export interface ApiErrorResponse {
  statusCode: number;
  message: string;
}

export interface CustomError extends AxiosError<ApiErrorResponse> {
  config: {
    showToast?: boolean;
  };
}