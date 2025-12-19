import './globals.css';

export const metadata = {
  title: 'Business Clarity Snapshot',
  description: 'Start here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B182B] text-white">
        {children}
      </body>
    </html>
  );
}
