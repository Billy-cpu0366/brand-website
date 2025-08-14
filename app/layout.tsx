import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "品牌宣传网站 - 乡村振兴·教育数字化·文化传承",
  description: "通过数字教育和文化创新赋能乡村未来发展",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
