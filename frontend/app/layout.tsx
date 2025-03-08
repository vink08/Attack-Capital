
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';
//import Header from '../components/Header';
import Header from '../components/Header'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Blog Platform',
  description: 'A platform for creating and sharing blog posts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #e9ecef' }}>
              <p>© {new Date().getFullYear()} Personal Blog Platform</p>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}