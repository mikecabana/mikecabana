import { FC, ReactNode } from 'react';

export const TotemPole: FC<{ children: ReactNode }> = ({children}) => {
    return <div className="flex flex-col items-center totem-pole max-w-[100px]">
        {children}
    </div>;
};
