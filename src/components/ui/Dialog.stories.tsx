import type { Meta, StoryObj } from '@storybook/nextjs';
import { Dialog } from './Dialog';
import { Button } from './Button';
import { dialog } from '@/lib/dialog';

const meta: Meta<typeof Dialog> = {
	title: 'UI/Dialog',
	component: Dialog,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	render: () => {
		return (
			<div className="p-10">
				<Button onClick={() => dialog.open()}>다이얼로그 열기</Button>
				<Dialog title="회원 탈퇴" description="정말로 탈퇴하시겠습니까?">
					<div className="flex justify-end gap-2">
						<Button onClick={() => dialog.close()}>취소</Button>
						<Button
							onClick={() => {
								console.log('탈퇴 처리');
								dialog.close();
							}}
						>
							탈퇴하기
						</Button>
					</div>
				</Dialog>
			</div>
		);
	},
};