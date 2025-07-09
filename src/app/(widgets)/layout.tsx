import { ThemeProvider } from '@/components/theme-provider'

import '../(app)/globals.css'

export const metadata = {
  title: 'Countdown Widget | mikecabana.com',
  description: 'A countdown widget you can use anywhere',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
