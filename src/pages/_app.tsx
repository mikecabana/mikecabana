import type { AppProps /*, AppContext */ } from 'next/app';
import { BaseLayout } from '../components/layouts/BaseLayout';
import { ThemeProvider } from 'next-themes';
import { UnderMaintenanceProvider } from '../lib/useUnderMaintenance';
import Script from 'next/script';

import '../styles/globals.scss';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            {/* Google Tag Manager - Global base code */}
            <Script
                id="gtm-base-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer', '${GTM_ID}');
                    `,
                }}
            />
            <UnderMaintenanceProvider>
                <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
                    <BaseLayout>
                        <Component {...pageProps} />
                    </BaseLayout>
                </ThemeProvider>
            </UnderMaintenanceProvider>
        </>
    );
}

export default MyApp;
