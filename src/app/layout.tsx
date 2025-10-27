import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gabryella Klein - Biomédica Estética',
  description: 'Tratamentos faciais e capilares com excelência. CRBM-5: 010954. Atendimentos personalizados e resultados reais.',
  keywords: ['Biomédica Estética', 'Tratamento Facial', 'Tratamento Capilar', 'Gabryella Klein', 'Estética Gravataí', 'Biomédica Gravataí'],
  authors: [{ name: 'Gabryella Klein' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo_branco_suave.png',
  },
  metadataBase: new URL('https://dragabryellaklein.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
