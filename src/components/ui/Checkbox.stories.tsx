import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Checkbox } from './Checkbox';
import { Label } from './Label';

const meta: Meta<typeof Checkbox> = {
	title: 'UI/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {	args: { checked: false } };
export const Disabled: Story = { args: { disabled: true } };
export const WithLabel: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);

		return (
			<div className="flex items-center space-x-2">
				<Checkbox
					id="agree"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					{...args}
				/>
				<Label htmlFor="agree">I agree to the terms</Label>
			</div>
		);
	},
};