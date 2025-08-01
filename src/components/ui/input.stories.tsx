import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './Input';
import { Label } from './Label';

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
	tags: ['autodocs'],
	args: {
		placeholder: '텍스트를 입력해주세요',
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const WithValue: Story = {	args: { value: 'Hello World' } };
export const WithLabel: Story = {
	render: (args) => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="email">Email</Label>
			<Input id="email" {...args} />
		</div>
	),
};