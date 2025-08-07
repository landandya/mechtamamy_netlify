"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function TelegramReviewsButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleTelegramClick = () => {
    window.open("https://t.me/mechtamamy_reviews", "_blank")
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Image src="/tglogo.png" alt="Telegram" width={40} height={40} className="object-contain" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Больше отзывов в Telegram</h2>

          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашей группе в Telegram, где родители делятся свежими отзывами, фотографиями полученных
            портретов и общаются друг с другом!
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-blue-500" />
                <span className="font-semibold text-neutral-800">Группа отзывов</span>
              </div>
              <span className="text-sm text-green-600 font-medium">Активна</span>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              • Свежие отзывы каждый день
              <br />• Фото готовых работ
              <br />• Общение с другими родителями
              <br />• Быстрые ответы на вопросы
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleTelegramClick}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image src="/tglogo.png" alt="Telegram" width={24} height={24} className="mr-3" />
              Перейти в группу отзывов
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <p className="text-sm text-neutral-500">Более 500 участников уже в группе</p>
        </motion.div>
      </div>
    </section>
  )
}
