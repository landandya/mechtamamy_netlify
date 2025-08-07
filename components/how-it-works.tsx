"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Send, Upload, Cpu, Gift } from "lucide-react"

const steps = [
  {
    icon: Send,
    title: "Отправляйте заявку",
    description: "Заполните простую форму с вашими контактными данными",
  },
  {
    icon: Upload,
    title: "Загрузите фото родителей",
    description: "Пришлите качественные фотографии мамы и папы",
  },
  {
    icon: Cpu,
    title: "Нейросети генерируют фото",
    description: "Искусственный интеллект создает уникальный портрет",
  },
  {
    icon: Gift,
    title: "Получаете портрет в рамке",
    description: "Красивый портрет вашего будущего малыша готов!",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Как сделать заказ</h2>
          <p className="text-xl text-neutral-600">Простой процесс в 4 шага</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-dream-200 to-dream-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-dream-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dream-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">{step.title}</h3>

              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
