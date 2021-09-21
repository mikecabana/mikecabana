import { FunctionComponent } from 'react';

export const BaseLayout: FunctionComponent = ({ children }) => {
    return <div className="bg-background-500 text-primary-500 dark:bg-primary-500 dark:text-background-500 overflow-y-auto h-screen">{children}</div>;
};
