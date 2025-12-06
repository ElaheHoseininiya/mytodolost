import { Rubik } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Todo List App',
  description: 'A modern todo list application built with Next.js',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${rubik.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
 