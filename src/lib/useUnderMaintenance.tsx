import { ReactNode, createContext, useContext } from 'react';

const UnderMaintenanceContext = createContext(false);

export const UnderMaintenanceProvider = ({ children }: { children: ReactNode }) => {
    const isUnderMaintenance = process.env.NEXT_PUBLIC_UNDER_MAINTENANCE === 'true' ? true : false;

    return <UnderMaintenanceContext.Provider value={isUnderMaintenance}>{children}</UnderMaintenanceContext.Provider>;
};

export const useUnderMaintenance = () => {
    return useContext(UnderMaintenanceContext);
};
