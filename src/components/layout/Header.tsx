import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const Header = () => {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center space-x-4">
					<Link href="/" className="text-2xl font-bold text-primary">
            MyBoilerplate
					</Link>
					<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
						<Link href="/features" className="text-muted-foreground hover:text-foreground">
              Features
						</Link>
						<Link href="/docs" className="text-muted-foreground hover:text-foreground">
              Docs
						</Link>
						<Link href="/examples" className="text-muted-foreground hover:text-foreground">
              Examples
						</Link>
						<Link href="https://github.com/hyunz214/nextjs-boilerplate-by-hyunz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              GitHub
						</Link>
					</nav>
				</div>
				<div className="flex items-center space-x-3">
					<Button variant="ghost" >
						<Link href="/login">로그인</Link>
					</Button>
					<Button >
						<Link href="/signup">회원가입</Link>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;