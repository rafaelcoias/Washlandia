import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Washlândia | Lavandaria Self-Service em Portugal",
  description:
    "A Washlândia é a sua lavandaria self-service de confiança em Portugal. Oferecemos serviços de lavagem, secagem e tratamento de roupa com equipamentos modernos e eficientes.",
  keywords:
    "lavandaria, self-service, lavagem de roupa, secagem de roupa, lavandaria Portugal, Washlândia, lavar roupa, secar roupa",
  openGraph: {
    title: "Washlândia | Lavandaria Self-Service em Portugal",
    description:
      "A Washlândia é a sua lavandaria self-service de confiança em Portugal. Oferecemos serviços de lavagem, secagem e tratamento de roupa com equipamentos modernos e eficientes.",
    url: "https://washlandia.pt",
    siteName: "Washlândia",
    locale: "pt_PT",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
