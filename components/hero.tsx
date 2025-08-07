"use client"

import { Button } from "@/components/ui/button"
import LazyImage from "./lazy-image"

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Упрощенный фон без тяжелых анимаций */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый контент */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Портрет вашего{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                будущего малыша
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Создаем уникальные портреты будущих детей с помощью нейросетей по фотографиям родителей
            </p>

            {/* Преимущества */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Быстро</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm font-semibold">Качественно</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="text-2xl mb-2">💝</div>
                <div className="text-sm font-semibold">С любовью</div>
              </div>
            </div>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Создать портрет 🎨
            </Button>
          </div>

          {/* Изображение - загружается с приоритетом */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
              <LazyImage
                src="/baby1.jpg"
                alt="Пример портрета будущего ребенка"
                className="w-full h-auto rounded-2xl"
                priority={true}
                width={400}
                height={400}
              />
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
