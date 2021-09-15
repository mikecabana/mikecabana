import { ChangeEvent, ChangeEventHandler, FunctionComponent, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@heroicons/react/outline';

interface ThemeTogglerProps {}

export const ThemeToggler: FunctionComponent<ThemeTogglerProps> = ({}) => {
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setChecked(theme === 'dark');
    }, [theme]);

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        if (mounted) {
            setChecked(theme === 'dark');
            setTheme(checked ? 'light' : 'dark');
        }
    };

    return (
        <>
            {mounted && (
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" checked={checked} onChange={handleToggle} className="hidden" />
                    <div className="p-1 bg-gray-300 dark:bg-gray-700 rounded-full w-8 mr-2 flex transition">
                        <div className="h-3 w-3 bg-white rounded-full transition transform dark:translate-x-[100%]"></div>
                    </div>
                    {/* <span>{theme}</span> */}
                    {checked ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800" />}
                </label>
            )}
        </>
    );
};
