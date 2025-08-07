import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Простая иллюстрация без тяжелых анимаций */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <span className="text-6xl">👶</span>
          </div>
        </div>

        {/* Заголовок */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Упс! Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Похоже, эта страница ещё не родилась! 👶<br />
          Давайте вернёмся к созданию портретов будущих малышей.
        </p>

        {/* Кнопки навигации */}
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full">
              🏠 На главную
            </Button>
          </Link>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200">
          <p className="text-sm text-gray-600">
            Если вы считаете, что это ошибка, свяжитесь с нами через форму на главной странице
          </p>
        </div>
      </div>
    </div>
  )
}
