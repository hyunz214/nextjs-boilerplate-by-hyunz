import Link from 'next/link';
import { Button } from '@/components/ui/Button'; 

const NotFound = () => {
	return (
		<div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
			<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        404 - 페이지를 찾을 수 없어요
			</h1>
			<p className="max-w-[600px] text-muted-foreground md:text-xl">
        요청하신 페이지가 존재하지 않거나, 다른 곳으로 이동했을 수 있습니다.
			</p>
			<Button>
				<Link href="/">메인으로 돌아가기</Link>
			</Button>
		</div>
	);
};

export default NotFound;