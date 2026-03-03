import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sandra Kihoro | Full-stack Developer & QA Engineer',
  description: 'Building reliable software, from first line to final test. Full-stack developer and QA engineer who ships clean, well-tested web applications.',
  keywords: ['Full-stack Developer', 'QA Engineer', 'Software Engineer', 'React', 'Node.js', 'Kenya'],
  authors: [{ name: 'Sandra Kihoro' }],
  openGraph: {
    title: 'Sandra Kihoro | Full-stack Developer & QA Engineer',
    description: 'Building reliable software, from first line to final test.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
