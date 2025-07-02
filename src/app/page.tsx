import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

export default function Home() {
  return (
    <div className="p-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>프로젝트 시작하기</CardTitle>
          <CardDescription>새로운 프로젝트를 생성하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">프로젝트 이름</label>
                <Input id="name" placeholder="나의 멋진 프로젝트" />
              </div>
              <Badge>New</Badge>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">취소</Button>
          <Button>생성</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
