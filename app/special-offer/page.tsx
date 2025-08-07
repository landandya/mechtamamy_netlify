import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Gift, Zap, Users, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Специальная акция -50% | МечтаМамы",
  description:
    "Получите портрет будущего ребенка со скидкой 50% до 07.07.2025. Подробности акции и условия предзаказа.",
  keywords: "акция, скидка 50%, портрет будущего ребенка, предзаказ, МечтаМамы",
}

export default function SpecialOfferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dream-100 via-dream-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-dream-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-dream-600 hover:text-dream-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">На главную</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-neutral-800 text-center flex-1 mx-4">
            Специальная акция -50%
          </h1>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-bold uppercase tracking-wide shadow-lg">
              🔥 Супер Акция
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-neutral-800 mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-dream-500 to-dream-600 bg-clip-text text-transparent">
              -50% на предзаказ!
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-neutral-600 mb-6 md:mb-8">
            Только до <strong className="text-dream-600">07.07.2025</strong> — оформите предзаказ по суперцене
          </p>

          {/* Stats */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-dream-200 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-lg mb-6 md:mb-8">
            <Users className="w-5 md:w-6 h-5 md:h-6 text-dream-500" />
            <span className="text-neutral-700 font-medium text-sm md:text-lg">Уже заказано:</span>
            <span className="font-bold text-lg md:text-xl text-dream-600">169+</span>
            <span className="text-neutral-700 font-medium text-sm md:text-lg">портретов</span>
          </div>
        </div>

        {/* Main Offer Card */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-dream-200 shadow-2xl mb-8 md:mb-12">
          <CardContent className="p-6 md:p-10">
            {/* Pricing */}
            <div className="text-center mb-8 md:mb-10">
              <div className="bg-gradient-to-br from-dream-100 to-dream-200 rounded-3xl p-6 md:p-8 mb-6 md:mb-8">
                <Gift className="w-16 md:w-20 h-16 md:h-20 text-dream-500 mx-auto mb-4 md:mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Специальная цена</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                  {[
                    { size: "A5 (15×21 см)", oldPrice: "1500₽", newPrice: "749₽" },
                    { size: "A4 (21×30 см)", oldPrice: "2000₽", newPrice: "999₽" },
                    { size: "A3 (30×42 см)", oldPrice: "3000₽", newPrice: "1499₽" },
                    { size: "A2 (42×59 см)", oldPrice: "5000₽", newPrice: "2499₽" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-3 md:p-4 shadow-md">
                      <div className="text-xs md:text-sm font-medium text-neutral-600 mb-2">{item.size}</div>
                      <div className="text-sm md:text-lg text-neutral-500 line-through mb-1">{item.oldPrice}</div>
                      <div className="text-lg md:text-2xl font-bold text-dream-600">{item.newPrice}</div>
                    </div>
                  ))}
                </div>

                <div className="text-base md:text-lg text-dream-700 font-medium">Экономия до 50%!</div>
              </div>
            </div>

            {/* What You Get */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4 md:mb-6 flex items-center gap-3">
                  <Zap className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
                  Что вы получаете:
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Электронная версия портрета сразу после обработки",
                    "Подарочный набор в красивой рамке",
                    "Доставка курьером 07.07.2025",
                    "Гарантия качества и возврат средств",
                    "Персональная консультация по выбору стиля",
                    "Возможность внесения корректировок",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-dream-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4 md:mb-6 flex items-center gap-3">
                  <Clock className="w-5 md:w-6 h-5 md:h-6 text-dream-500" />
                  Как это работает:
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {[
                    { step: "1", title: "Оформляете предзаказ", desc: "Заполняете форму и выбираете размер портрета" },
                    {
                      step: "2",
                      title: "Получаете электронную версию",
                      desc: "В течение 3-5 дней после обработки фотографий",
                    },
                    {
                      step: "3",
                      title: "Получаете подарочный набор",
                      desc: "07.07.2025 курьер доставляет красивую рамку",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 md:w-10 h-8 md:h-10 bg-dream-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1 text-sm md:text-base">{item.title}</h4>
                        <p className="text-neutral-600 text-xs md:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA - Исправленные кнопки */}
            <div className="text-center">
              <div className="max-w-md mx-auto">
                <Link href="/#contact-form" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-dream-500 to-dream-600 hover:from-dream-600 hover:to-dream-700 text-white py-4 md:py-6 px-6 md:px-12 text-base md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    🎁 Оформить предзаказ сейчас
                  </Button>
                </Link>
                <p className="text-xs md:text-sm text-neutral-500 mt-4">* Акция действует до 07.07.2025 включительно</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-neutral-800 mb-4">Условия акции</h3>
              <ul className="space-y-2 md:space-y-3 text-neutral-600 text-sm md:text-base">
                <li>• Акция действует до 07.07.2025 23:59</li>
                <li>• Скидка применяется только при предзаказе</li>
                <li>• Электронная версия предоставляется в течение 5 дней</li>
                <li>• Физический продукт доставляется 07.07.2025</li>
                <li>• Возможна оплата частями</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-neutral-800 mb-4">Гарантии</h3>
              <ul className="space-y-2 md:space-y-3 text-neutral-600 text-sm md:text-base">
                <li>• 100% возврат средств при неудовлетворительном результате</li>
                <li>• Бесплатные корректировки портрета</li>
                <li>• Гарантия качества печати</li>
                <li>• Страхование доставки</li>
                <li>• Техническая поддержка 24/7</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA - Исправленная кнопка */}
        <div className="bg-gradient-to-r from-dream-500 to-dream-600 rounded-2xl p-6 md:p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Не упустите возможность!</h3>
          <p className="text-base md:text-lg mb-6 opacity-90">
            Количество мест по акции ограничено. Успейте оформить предзаказ до 07.07.2025
          </p>
          <div className="max-w-sm mx-auto">
            <Link href="/#contact-form" className="block">
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-white text-dream-600 hover:bg-gray-100 py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-lg"
              >
                Оформить заявку на главной странице
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
