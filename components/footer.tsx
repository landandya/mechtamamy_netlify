"use client"

import { motion } from "framer-motion"
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

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-dream-300">МечтаМамы</h3>
            <p className="text-neutral-300 leading-relaxed">
              Создаем уникальные портреты будущих малышей с помощью современных и передовых нейросетей
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-neutral-300">
              <p>📧 TG: @mechtamamyrf</p>
              <p>📱 +7 (993) 553-27-48</p>
              <p>🕒 Пн-Пт: 9:00-18:00</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden`}
                  title={social.name}
                >
                  <Image
                    src={social.logo || "/placeholder.svg"}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 МечтаМамы. Все права защищены.</p>
            <div className="flex gap-4 text-sm">
              <a
                href="/user-agreement"
                target="_blank"
                className="hover:text-dream-300 transition-colors"
                rel="noreferrer"
              >
                Пользовательское соглашение
              </a>
              <a
                href="/public-offer"
                target="_blank"
                className="hover:text-dream-300 transition-colors"
                rel="noreferrer"
              >
                Публичная оферта
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
