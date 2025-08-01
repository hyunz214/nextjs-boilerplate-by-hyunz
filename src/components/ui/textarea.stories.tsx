import type { Meta, StoryObj } from '@storybook/nextjs';
import { Textarea } from './Textarea';
import { Label } from './Label';

const meta: Meta<typeof Textarea> = {
	title: 'UI/Textarea',
	component: Textarea,
	tags: ['autodocs'],
	args: {
		placeholder: '텍스트를 입력해주세요',
	},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithText: Story = {
	args: { value: 'Hello world' },
};
export const Disabled: Story = {
	args: { disabled: true },
};
export const WithLabel: Story = {
	render: (args) => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="bio">Bio</Label>
			<Textarea id="bio" {...args} />
		</div>
	),
};