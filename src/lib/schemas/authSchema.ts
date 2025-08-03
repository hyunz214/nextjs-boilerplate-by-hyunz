import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: '이메일을 입력해주세요.' })
		.email({ message: '유효한 이메일 형식이 아닙니다.' }),
	password: z
		.string()
		.min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;