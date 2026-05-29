import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Rebecca Ayodele",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
