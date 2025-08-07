"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Gift, Zap, Star, Users } from "lucide-react"

export default function SpecialOffer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [portraitCount, setPortraitCount] = useState(0)

  // Инициализация счетчика портретов
  useEffect(() => {
    const baseCount = 169 // Базовое количество
    const startTime = new Date("2025-06-06").getTime()
    const now = Date.now()
    const elapsedTime = now - startTime
    const intervals = Math.floor(elapsedTime / (4000 * 1000)) // каждые 4000 секунд

    let totalAdded = 0
    for (let i = 0; i < intervals; i++) {
      // Используем детерминированный рандом на основе интервала
      const seed = i * 12345
      const random = (seed % 8) + 3 // от 3 до 10
      totalAdded += random
    }

    setPortraitCount(baseCount + totalAdded)

    // Обновляем счетчик каждые 4000 секунд
    const interval = setInterval(() => {
      const randomAdd = Math.floor(Math.random() * 8) + 3 // от 3 до 10
      setPortraitCount((prev) => prev + randomAdd)
    }, 4000 * 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetDate = new Date("2025-07-07T23:59:59").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-dream-100 via-dream-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-dream-300 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-dream-400 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-dream-200 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
              🔥 Супер Акция
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-4">
            <span className="bg-gradient-to-r from-dream-500 to-dream-600 bg-clip-text text-transparent">
              -50% на предзаказ!
            </span>
          </h2>

          <p className="text-xl text-neutral-600 mb-8">
            Только до <strong>07.07.2025</strong> — оформите предзаказ по суперцене
          </p>

          {/* Счетчик портретов */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-dream-200 rounded-full px-6 py-3 shadow-lg mb-8"
          >
            <Users className="w-5 h-5 text-dream-500" />
            <span className="text-neutral-700 font-medium">Уже заказано:</span>
            <motion.span
              key={portraitCount}
              initial={{ scale: 1.2, color: "#F57BA2" }}
              animate={{ scale: 1, color: "#374151" }}
              transition={{ duration: 0.5 }}
              className="font-bold text-lg"
            >
              {portraitCount.toLocaleString()}
            </motion.span>
            <span className="text-neutral-700 font-medium">портретов</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-dream-200 shadow-2xl">
            <CardContent className="p-8">
              {/* Timer */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center justify-center gap-2">
                  <Clock className="w-6 h-6 text-dream-500" />
                  До окончания акции:
                </h3>

                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {[
                    { value: timeLeft.days, label: "дней" },
                    { value: timeLeft.hours, label: "часов" },
                    { value: timeLeft.minutes, label: "минут" },
                    { value: timeLeft.seconds, label: "секунд" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-dream-500 to-dream-600 text-white rounded-lg p-3 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                    >
                      <div className="text-2xl font-bold">{item.value.toString().padStart(2, "0")}</div>
                      <div className="text-xs uppercase">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Offer Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold text-neutral-800 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Что вы получаете:
                  </h4>

                  <ul className="space-y-3">
                    {[
                      "Электронная версия портрета сразу после обработки",
                      "Подарочный набор в красивой рамке",
                      "Доставка курьером 07.07.2025",
                      "Гарантия качества и возврат средств",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Star className="w-5 h-5 text-dream-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-dream-100 to-dream-200 rounded-2xl p-6 mb-6">
                    <Gift className="w-16 h-16 text-dream-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-neutral-800 mb-2">Специальная цена</h4>

                    <div className="space-y-2">
                      <div className="text-lg text-neutral-600 line-through">от 1500₽</div>
                      <div className="text-4xl font-bold text-dream-600">от 749₽</div>
                      <div className="text-sm text-dream-700 font-medium">Экономия до 50%!</div>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="w-full bg-gradient-to-r from-dream-500 to-dream-600 hover:from-dream-600 hover:to-dream-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    🎁 Оформить предзаказ
                  </Button>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center text-sm text-neutral-600 bg-dream-50 rounded-lg p-4"
              >
                <p>
                  <strong>Как это работает:</strong> Оформляете предзаказ → Получаете электронную версию → 07.07 курьер
                  доставляет подарочный набор в рамке
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
