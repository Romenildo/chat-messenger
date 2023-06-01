import './globals.css'


export const metadata = {
  title: 'MEssenger chat',
  description: 'Clone do Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
