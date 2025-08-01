import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'UI/Switch',
	component: Switch,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);

		return (
			<div className="p-10">
				<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
				<p className="mt-2 text-sm">스위치 상태: {checked ? '켜짐' : '꺼짐'}</p>
			</div>
		);
	},
};