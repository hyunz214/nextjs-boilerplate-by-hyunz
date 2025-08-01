import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement>

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ className, ...props }, ref) => (
	<label className={cn('relative inline-flex items-center cursor-pointer', className)}>
		<input
			type="checkbox"
			className="sr-only peer"
			ref={ref}
			{...props}
		/>
		<div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-black transition-colors" />
		<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform" />
	</label>
));

Switch.displayName = 'Switch';