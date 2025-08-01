import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, ...props }, ref) => {
		return (
			<input
				type="checkbox"
				ref={ref}
				className={cn(
					'h-4 w-4 shrink-0 rounded-sm border border-neutral-300 bg-white text-black focus:ring-2 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...props}
			/>
		);
	},
);

Checkbox.displayName = 'Checkbox';