'use client';
import { useToast } from '@/hooks/useToast';
import clsx from 'clsx';

export const Toast = () => {
	const { message, type, show } = useToast();

	if (!show || !message) return null;

	return (
		<div 
			className={clsx(
				'fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow text-white z-50 transition-opacity duration-300',
				{
					'bg-gray-800': type === 'default',
					'bg-green-600': type === 'success',
					'bg-red-600': type === 'error',
				},
			)}
		>
			{message}
		</div>
	);
};