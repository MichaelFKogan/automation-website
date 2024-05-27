import './css/style.css';
import './css/custom.css';

export const metadata = {
  title: {
    absolute: '',
    default: 'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
    template:
      '%s | CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
  },
  description: 'AI Writer & Copywriting Landing Page Next.js Template',
  openGraph: {
    title: 'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
    description:
      'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
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
