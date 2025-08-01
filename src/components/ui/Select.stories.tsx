import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'UI/Select',
	component: Select,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState('');
		return (
			<div className="p-10">
				<p className="mt-2 text-sm mb-2">선택된 항목: {value || '없음'}</p>
				<Select value={value} onChange={(e) => setValue(e.target.value)}>
					<option value="" disabled>
					옵션을 선택하세요
					</option>
					<option value="사과">사과</option>
					<option value="바나나">바나나</option>
					<option value="체리">체리</option>
				</Select>				
			</div>
		);
	},
};