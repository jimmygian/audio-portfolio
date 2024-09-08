
export const metadata = {
    title: 'Dimitris | Audio Portfolio',
    description: 'Dimitris is a professional Audio Engineer with programming experience.',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            Layout
            {children}
        </body>
      </html>
    )
  }