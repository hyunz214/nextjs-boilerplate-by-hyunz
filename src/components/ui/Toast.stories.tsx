import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';
import { Toast } from './Toast';
import { toast } from '@/lib/toast';

const meta: Meta<typeof Toast> = {
	title: 'UI/Toast',
	component: Toast,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
	render: () => {
		return (
			<>
				<div className="p-10 flex flex-col gap-2">
					<Button onClick={() => toast.default('기본 토스트가 열렸습니다.')}> Default Toast </Button>
					<Button onClick={() => toast.success('성공 토스트가 열렸습니다.')} className='bg-green-600'> Success Toast </Button>
					<Button onClick={() => toast.error('에러 토스트가 열렸습니다.')} className='bg-red-600'> Error Toast </Button>
				</div>
			  <Toast />
			</>
		);
	},
};