import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Market Watcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-900 text-slate-100 mx-auto p-4 h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
