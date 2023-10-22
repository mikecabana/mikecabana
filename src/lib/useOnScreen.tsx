import { MutableRefObject, useEffect, useState } from 'react';

export const useOnScreen = (ref: MutableRefObject<any>, rootMargin: string, once?: boolean) => {
    // state for whether element is visible or not
    const [isIntersecting, setIsIntersecting] = useState<boolean | undefined>(false);
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // update state when observer callback fires
                setIsIntersecting(entry?.isIntersecting);
            },
            {
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return !hasRun ? isIntersecting : true;
};
