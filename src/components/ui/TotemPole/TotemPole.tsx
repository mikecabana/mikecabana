import { FunctionComponent } from 'react';

export const TotemPole: FunctionComponent = ({children}) => {
    return <div className="flex flex-col items-center totem-pole max-w-[100px]">
        {children}
    </div>;
};
