'use client';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDialog } from '@/hooks/useDialog';

interface DialogProps {
	children: ReactNode;
  title?: string;
  description?: string;
}

export const Dialog = ({ children, title, description }: DialogProps) => {
	const { isOpen, closeDialog } = useDialog();

	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeDialog();
		};
		if (isOpen) {
			window.addEventListener('keydown', handleKey);
		}
		return () => window.removeEventListener('keydown', handleKey);
	}, [isOpen, closeDialog]);

	if (!isOpen) return null;

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={closeDialog}
		>
			<div
				className="bg-white rounded-md shadow-lg max-w-md w-full p-6"
				role="dialog"
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
				aria-modal="true"
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<h2 id="dialog-title" className="text-lg font-semibold mb-2">
						{title}
					</h2>
				)}
				{description && (
					<p id="dialog-description" className="text-sm mb-4">
						{description}
					</p>
				)}
				<div>{children}</div>
			</div>
		</div>,
		document.body,
	);
};