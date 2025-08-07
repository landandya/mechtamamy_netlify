"use client"

import { useState, lazy, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import LazyImage from "./lazy-image"

// Ленивая загрузка компонента слайдера
const PregnancySlider = lazy(() => import("./pregnancy-slider-full"))

export default function PregnancyJourney() {
  const [isStarted, setIsStarted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleStart = () => {
    setIsStarted(true)
    // Небольшая задержка для плавности
    setTimeout(() => setIsExpanded(true), 300)
  }

  const handleRestart = () => {
    setIsExpanded(false)
    setTimeout(() => {
      setIsStarted(false)
    }, 300)
  }

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-b border-pink-100 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isStarted ? (
            // Начальное состояние - только кнопка и логотип
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-4"
            >
              <div className="flex items-center justify-between">
                {/* Логотип */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <LazyImage
                      src="/logo.png"
                      alt="МечтаМамы"
                      className="w-full h-full object-contain"
                      priority={true}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">МечтаМамы</h3>
                    <p className="text-xs text-gray-600 hidden sm:block">Портреты будущих малышей</p>
                  </div>
                </div>

                {/* Кнопка запуска */}
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-2 hidden sm:block">
                    Посмотрите как развивается ваш малыш в животике
                  </p>
                  <Button
                    onClick={handleStart}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Начать путешествие
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            // Развернутое состояние с динамическим слайдером
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: isExpanded ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Suspense
                fallback={
                  <div className="py-8 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-pink-500">
                      <Heart className="w-5 h-5 animate-pulse" />
                      <span className="text-sm">Загружаем путешествие...</span>
                    </div>
                  </div>
                }
              >
                <PregnancySlider onComplete={handleRestart} />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
