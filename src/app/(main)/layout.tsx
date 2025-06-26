
export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
