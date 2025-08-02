import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';
import { Toast } from './Toast';
import { useToastStore } from '@/stores/toastStore';

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
		const { showToast } = useToastStore();

		return (
			<>
				<div className="p-10 flex flex-col gap-2">
					<Button onClick={() => showToast('기본 토스트가 열렸습니다.','default')}> Default Toast </Button>
					<Button onClick={() => showToast('성공 토스트가 열렸습니다.','success')} className='bg-green-600'> Success Toast </Button>
					<Button onClick={() => showToast('에러 토스트가 열렸습니다.','error')} className='bg-red-600'> Error Toast </Button>
				</div>
			  <Toast />
			</>
		);
	},
};