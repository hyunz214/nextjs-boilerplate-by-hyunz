import { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
	<select
		ref={ref}
		className={cn(
			'block w-full rounded-md border border-neutral-300 bg-white py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50',
			className,
		)}
		{...props}
	>
		{children}
	</select>
));

Select.displayName = 'Select';