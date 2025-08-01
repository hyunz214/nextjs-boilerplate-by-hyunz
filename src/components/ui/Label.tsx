import { LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ className, ...props }: LabelProps) => {
	return (
		<label
			className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
			{...props}
		/>
	);
};
Label.displayName = 'Label';

export { Label };
