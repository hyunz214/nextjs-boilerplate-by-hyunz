import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'], // 자동 문서화 지원
	args: {
		children: 'Click me',
		size: 'default',
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Link: Story = { args: { variant: 'link' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const Icon: Story = { args: { size: 'icon', children: '🔔' } };