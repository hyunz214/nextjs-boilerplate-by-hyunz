const Spinner = () => {
	return (
		<div role="status" aria-live="polite" className="flex justify-center items-center p-4 h-full">
			<svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8v8H4z"
				></path>
			</svg>
			<span className="sr-only">로딩 중...</span>
		</div>
	);
};

export default Spinner;