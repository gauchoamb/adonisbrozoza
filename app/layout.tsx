import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adonis Brozoza',
  description: 'Adonis Brozoza — Brazilian attorney, financial integrity, AML/CFT compliance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
