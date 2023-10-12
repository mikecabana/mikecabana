'use client'

import { FC, ReactNode, useRef } from 'react';
import { useOnScreen } from '../../../lib/useOnScreen';

export const SectionWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const ref = useRef(null);

	const isOnScreen = useOnScreen(ref, '-150px');
    
	return <div ref={ref} className={`transition transform duration-300 ${isOnScreen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>{children}</div>;
};
