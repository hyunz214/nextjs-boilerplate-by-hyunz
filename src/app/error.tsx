
'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button'; 

const Error =({ error, reset }: { error: Error & { digest?: string };  reset: () => void;}) => {
	useEffect(() => {
		// 에러 리포팅 서비스(Sentry 등)에 에러를 기록
		console.error(error);
	}, [error]);

	return (
		<div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
			<h2 className="text-2xl font-bold">앗, 무언가 잘못되었어요!</h2>
			<p className="text-muted-foreground">
        서비스 이용에 불편을 드려 죄송합니다.
			</p>
			<Button onClick={() => reset()}>다시 시도하기</Button>
		</div>
	);
};

export default Error;