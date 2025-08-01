import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Dialog } from './Dialog';
import { Button } from './Button';

const meta: Meta<typeof Dialog> = {
	title: 'UI/Dialog',
	component: Dialog,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<div className="p-10">
				<Button    onClick={() =>     setOpen(true)}>
          다이얼로그 열기
				</Button>
				<Dialog isOpen={open} onClose={() => setOpen(false)}>
					<h2 className="text-lg font-bold mb-2">타이틀</h2>
					<p className="text-sm text-gray-600 mb-4">설명 문구입니다.</p>
					<Button onClick={() => setOpen(false)} >
					닫기
					</Button>
				</Dialog>
			</div>
		);
	},
};