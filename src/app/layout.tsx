import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EstudaConcurso - Aprovação em Concursos Públicos',
  description: 'Plataforma completa para preparação de concursos públicos com videoaulas, simulados, quiz interativo e comunidade de concurseiros.',
  keywords: 'concursos públicos, preparação, videoaulas, simulados, quiz, aprovações',
  author: 'EstudaConcurso',
  openGraph: {
    title: 'EstudaConcurso - Aprovação em Concursos',
    description: 'Sua plataforma completa para aprovação em concursos públicos.',
    url: 'https://estudaconcurso.com',
    siteName: 'EstudaConcurso',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstudaConcurso - Aprovação em Concursos',
    description: 'Sua plataforma completa para aprovação em concursos públicos.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}