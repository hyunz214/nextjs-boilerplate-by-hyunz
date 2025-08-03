'use client';

import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/queryClient';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
	const [client] = useState(queryClient); 

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};