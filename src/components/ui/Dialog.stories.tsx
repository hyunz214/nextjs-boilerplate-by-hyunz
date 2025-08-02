import type { Meta, StoryObj } from '@storybook/nextjs';
import { Dialog } from './Dialog';
import { Button } from './Button';
import { useDialogStore } from '@/stores/dialogStore';

const meta: Meta<typeof Dialog> = {
	title: 'UI/Dialog',
	component: Dialog,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	render: () => {
		const { openDialog, closeDialog } = useDialogStore();
		
		return (
			<div className="p-10">
				<Button onClick={() => openDialog()}>다이얼로그 열기</Button>
				<Dialog title="회원 탈퇴" description="정말로 탈퇴하시겠습니까?">
					<div className="flex justify-end gap-2">
						<Button onClick={() => closeDialog()}>취소</Button>
						<Button
							onClick={() => {
								console.log('탈퇴 처리');
								closeDialog();
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