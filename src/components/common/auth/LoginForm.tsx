'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@/hooks/useAuth';
import { loginSchema, LoginSchemaType } from '@/lib/schemas/authSchema';
import { FormField } from '@/components/common/form/FormField';
import { Button } from '@/components/ui/Button';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const loginMutation = useLoginMutation();

	const onSubmit = (data: LoginSchemaType) => {
		loginMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left my-12">
			<FormField
				id="email"
				label="이메일"
				type="email"
				register={register}
				error={errors.email}
			/>
			<FormField
				id="password"
				label="비밀번호"
				type="password"
				register={register}
				error={errors.password}
			/>
			<Button type="submit" disabled={loginMutation.isPending} className='w-full'>
				{loginMutation.isPending ? '로그인 중...' : '로그인'}
			</Button>
		</form>
	);
};

export default LoginForm;