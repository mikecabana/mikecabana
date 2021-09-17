import type { AppProps /*, AppContext */ } from 'next/app';
import { BaseLayout } from '../components/layouts/BaseLayout';
import { ThemeProvider } from 'next-themes';
import { UnderMaintenanceProvider } from '../lib/useUnderMaintenance';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UnderMaintenanceProvider>
            <ThemeProvider attribute="class" enableSystem={true}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </ThemeProvider>
        </UnderMaintenanceProvider>
    );
}

export default MyApp;
