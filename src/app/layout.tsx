import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Navbar } from '@/widgets/Navbar';
import '@/_app/styles/globals.scss';

const mont = Montserrat({ subsets: ['latin'], variable: '--var-mont' });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={mont.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
