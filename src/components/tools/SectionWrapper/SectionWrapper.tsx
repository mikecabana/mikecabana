import { FunctionComponent, useRef } from 'react';
import { useOnScreen } from '../../../lib/useOnScreen';

export const SectionWrapper: FunctionComponent = ({ children }) => {
	const ref = useRef();

	const isOnScreen = useOnScreen(ref, '-150px');
	return <div ref={ref} className={`transition transform ${isOnScreen ? 'translate-y-0 opacity-100' : 'translate-y-1/2 opacity-0'}`}>{children}</div>;
};
