import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Guide from '@/components/Guide';
const mont = Montserrat({ subsets: ['latin'], variable: '--font-mont' });
const open = Open_Sans({ subsets: ['latin'], variable: '--font-open' });
export const metadata = { title: 'Jat Law Professional Corporation | Mississauga Lawyer', description: 'Real estate, litigation, corporate, wills and estates, and simple divorces in Mississauga, ON.' };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable} ${open.variable}`}>
      <body><Header />{children}<Footer /><Guide /></body>
    </html>
  );
}
