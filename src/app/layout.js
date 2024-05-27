import './css/style.css';
import './css/custom.css';

export const metadata = {
  title: {
    absolute: '',
    default: 'AI Automation',
    template:
      '%s AI Automation',
  },
  description: 'AI Writer & Copywriting Landing Page Next.js Template',
  openGraph: {
    title: 'AI Automation',
    description:
      'AI Automation',
    images: ['/openGraphImage.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
      </head>
      <body data-menu-collapse="lg">{children}</body>
    </html>
  );
}
