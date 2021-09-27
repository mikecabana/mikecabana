import { createContext, useContext } from 'react';

const UnderMaintenanceContext = createContext(false);

export function UnderMaintenanceProvider({ children }) {
    const isUnderMaintenance = process.env.NEXT_PUBLIC_UNDER_MAINTENANCE === 'true' ? true : false;

    return <UnderMaintenanceContext.Provider value={isUnderMaintenance}>{children}</UnderMaintenanceContext.Provider>;
}

export function useUnderMaintenance() {
    return useContext(UnderMaintenanceContext);
}
