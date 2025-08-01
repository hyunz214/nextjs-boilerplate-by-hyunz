import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';
import { Toast } from './Toast';

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
		const [show, setShow] = useState(false);
		return (
			<div className="p-10">
				<Button onClick={() => setShow(true)}> Show Toast </Button>
				{show && <Toast message="This is a toast message!" onClose={() => setShow(false)} />}
			</div>
		);
	},
};