"use client"

import Reviews from "@/components/reviews"
import TelegramReviewsButton from "@/components/telegram-reviews-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, MessageCircleQuestion } from "lucide-react"
import Link from "next/link"

export default function ReviewsClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Хлебные крошки и навигация */}
      <div className="bg-gradient-to-r from-dream-50 to-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4 hover:bg-dream-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
            </Button>
          </Link>

          <nav className="text-sm text-neutral-600">
            <Link href="/" className="hover:text-dream-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Отзывы</span>
          </nav>
        </div>
      </div>

      {/* Заголовок страницы */}
      <div className="bg-gradient-to-br from-dream-500 to-dream-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Отзывы наших клиентов</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Более 1000 семей уже получили портреты своих будущих малышей. Читайте их истории и делитесь своими
            впечатлениями!
          </p>
        </div>
      </div>

      {/* Основные отзывы */}
      <Reviews />

      {/* Кнопка для перехода на FAQ */}
      <div className="py-12 bg-gradient-to-br from-dream-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-dream-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-dream-400 to-pink-400 rounded-full p-3">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Остались вопросы?</h3>
            <p className="text-neutral-600 mb-6 text-lg">Найдите ответы на самые популярные вопросы о наших услугах</p>
            <Link href="/faq">
              <Button
                size="lg"
                className="bg-gradient-to-r from-dream-500 to-pink-500 hover:from-dream-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircleQuestion className="w-5 h-5 mr-2" />
                Часто задаваемые вопросы
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Кнопка для перехода в Telegram группу */}
      <TelegramReviewsButton />

      {/* Дополнительная информация */}
      <section className="py-16 bg-gradient-to-br from-dream-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Поделитесь своим опытом</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Если вы уже получили портрет своего будущего малыша, мы будем рады услышать вашу историю! Ваш отзыв поможет
            другим родителям принять решение.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">📝 Оставить отзыв</h3>
              <p className="text-neutral-600 mb-4">Напишите нам в любой удобной социальной сети или мессенджере</p>
              <Link href="/#contact-form">
                <Button className="bg-dream-500 hover:bg-dream-600 text-white">Связаться с нами</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">💬 Telegram группа</h3>
              <p className="text-neutral-600 mb-4">Присоединяйтесь к нашему сообществу и читайте свежие отзывы</p>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => window.open("https://t.me/mechtamamy_reviews", "_blank")}
              >
                Перейти в группу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
