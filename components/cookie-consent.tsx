"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Проверяем, дал ли пользователь согласие ранее
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Показываем уведомление через небольшую задержку для лучшего UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
    // Можно добавить логику отключения метрики при отказе
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-500 md:left-auto md:max-w-md">
      <Card className="border-2 border-pink-200 bg-white/95 backdrop-blur-sm shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="h-5 w-5 text-pink-500" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Мы используем cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Наш сайт использует файлы cookie и Яндекс.Метрику для улучшения работы сайта и анализа посещаемости.
                  Продолжая использовать сайт, вы соглашаетесь с использованием cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleAccept}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white flex-1"
                  size="sm"
                >
                  Принять
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                  size="sm"
                >
                  Отклонить
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                Подробнее в{" "}
                <a
                  href="/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 underline"
                >
                  пользовательском соглашении
                </a>
              </p>
            </div>

            <button
              onClick={handleDecline}
              className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
