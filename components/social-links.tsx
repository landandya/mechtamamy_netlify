"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const socialLinks = [
  {
    name: "VK",
    url: "https://vk.com/mechtamamy",
    logo: "/vklogo.png",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mechtamamyrf",
    logo: "/instagramlogo.png",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  {
    name: "Telegram",
    url: "https://t.me/mechtamamy",
    logo: "/tglogo.png",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Дзен",
    url: "https://dzen.ru/mechtamamy",
    logo: "/yandexzenlogo.png",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    name: "Одноклассники",
    url: "https://ok.ru/group/70000035835064",
    logo: "/oklogo.png",
    color: "bg-orange-600 hover:bg-orange-700",
  },
]

export default function SocialLinks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-dream-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Мы в социальных сетях</h2>
          <p className="text-xl text-neutral-600">Следите за нашими новостями и работами</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden`}
              title={social.name}
            >
              <Image
                src={social.logo || "/placeholder.svg"}
                alt={social.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
