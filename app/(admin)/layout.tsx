import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Banglish | Admin Dashboard',
  description: 'Learn Language Faster',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="grow">
            <div className="border-b sticky top-0 bg-slate-50 py-4">
              <SidebarTrigger />
            </div>
            <div className="bg-slate-100 h-full">
              <div className="p-2">{children}</div>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
