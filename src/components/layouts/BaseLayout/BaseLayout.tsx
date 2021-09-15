import { FunctionComponent } from 'react';

export const BaseLayout: FunctionComponent = ({ children }) => {
    return <div className="dark:bg-gray-900 dark:text-white overflow-y-auto h-screen">{children}</div>;
};
