import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "МечтаМамы - Портрет будущего ребенка",
  description: "Создаем уникальные портреты будущих детей с помощью ИИ по фотографиям родителей.",
  keywords: "портрет будущего ребенка, нейросеть, ИИ портрет",
  metadataBase: new URL("https://мечтамамы.рф"),
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Критически важные ресурсы - preload для быстрой загрузки */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/baby1.png" as="image" type="image/png" />
        <link rel="preload" href="/baby2.png" as="image" type="image/png" />
        <link rel="preload" href="/parent1.png" as="image" type="image/png" />
        <link rel="preload" href="/parent2.png" as="image" type="image/png" />

        {/* DNS prefetch для внешних ресурсов */}
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />

        {/* Оптимизация для мобильных сетей */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />

        {/* Минимальная Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(102733263, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true});
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
