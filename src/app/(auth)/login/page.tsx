import Link from 'next/link';
import LoginForm from '@/components/common/auth/LoginForm';

const Login = () => {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<div className="w-full max-w-md rounded-lg border bg-card p-8 shadow-lg">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold tracking-tight">로그인</h1>
					<LoginForm />
					<p className="mt-2 text-muted-foreground">
						계정이 없으신가요?{' '}
						<Link href="/signup" className="text-primary hover:underline">회원가입</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;