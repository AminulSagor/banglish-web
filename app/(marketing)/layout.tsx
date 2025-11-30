import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Header } from './_components/header';
import Footer from './_components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Banglish | Learn The Language You Want To Learn',
  description: 'Learn the language you want to learn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow bg-purple-200/30">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
