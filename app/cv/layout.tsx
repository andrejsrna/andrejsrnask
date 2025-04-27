import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andrej Srna - CV',
  description: 'Full Stack Developer | Web Development & Optimization Specialist | SEO & System Administration',
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}
