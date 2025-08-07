"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Home, MessageCircle, Phone, Mail } from "lucide-react"
import FAQ from "@/components/faq"

export default function FAQClientPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-gradient-to-br from-dream-50 via-white to-pink-50">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-dream-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-dream-600 hover:text-dream-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
              </Link>
              <div className="hidden md:flex items-center space-x-2 text-sm text-neutral-600">
                <Link href="/" className="hover:text-dream-600 transition-colors">
                  Главная
                </Link>
                <span>/</span>
                <span className="text-dream-600 font-medium">FAQ</span>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm" className="border-dream-200 text-dream-600 hover:bg-dream-50">
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Заголовок страницы */}
      <section ref={ref} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-dream-400 to-pink-400 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Здесь вы найдете ответы на самые популярные вопросы о наших услугах и процессе создания фотографий
              будущего малыша
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ компонент */}
      <FAQ />

      {/* Контактная информация */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-dream-50 to-pink-50 border-dream-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Не нашли ответ на свой вопрос?</h3>
                <p className="text-neutral-600 mb-8">
                  Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы!
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Phone className="w-8 h-8 text-dream-500 mb-2" />
                    <h4 className="font-semibold text-neutral-800 mb-1">Телефон</h4>
                    <a href="tel:+79935532748" className="text-dream-600 hover:text-dream-700 transition-colors">
                      +7 (993) 553-27-48
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Mail className="w-8 h-8 text-dream-500 mb-2" />
                    <h4 className="font-semibold text-neutral-800 mb-1">Email</h4>
                    <a
                      href="mailto:hello@мечтамамы.рф"
                      className="text-dream-600 hover:text-dream-700 transition-colors"
                    >
                      hello@мечтамамы.рф
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <MessageCircle className="w-8 h-8 text-dream-500 mb-2" />
                    <h4 className="font-semibold text-neutral-800 mb-1">Telegram</h4>
                    <a href="https://t.me/mechtamamy" className="text-dream-600 hover:text-dream-700 transition-colors">
                      @mechtamamy
                    </a>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-dream-500 to-pink-500 hover:from-dream-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Задать вопрос
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Кнопка возврата */}
      <section className="py-8 bg-gradient-to-br from-dream-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-dream-300 text-dream-700 hover:bg-dream-100 px-8 py-3 rounded-full font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
