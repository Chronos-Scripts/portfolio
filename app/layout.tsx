import Header from '../components/header'
import './globals.css'
import ActiveSectionContextProvider from '../context/active-section-context'
import Footer from '../components/footer'

export const metadata = {
  title: "Chronos's portfolio ♥",
  description:
    'a cool enthusiastic roblox-ts developer passionate about technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-pink"></div>
        <div className="bg-purple"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}