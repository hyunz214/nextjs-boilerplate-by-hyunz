import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({ message, duration = 3000, onClose }: ToastProps) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			onClose?.();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	if (!visible) return null;

	return (
		<div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-md animate-fade-in">
			{message}
		</div>
	);
};