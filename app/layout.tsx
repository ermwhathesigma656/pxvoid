import type React from "react"
import type { Metadata } from "next"
import { Fredoka as Fredoka_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fredokaOne = Fredoka_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "pxvoid",
  description: "Play the best games online",
  icons: {
    icon: "/logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fredokaOne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
