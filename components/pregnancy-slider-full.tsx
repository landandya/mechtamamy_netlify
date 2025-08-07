"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const pregnancyStages = [
  { week: 0, title: "Зачатие", description: "Начало новой жизни", icon: "✨", size: 2 },
  { week: 4, title: "4 недели", description: "Размер макового зернышка", icon: "•", size: 4 },
  { week: 8, title: "8 недель", description: "Размер малинки", icon: "🫐", size: 8 },
  { week: 12, title: "12 недель", description: "Размер лайма", icon: "🟢", size: 12 },
  { week: 16, title: "16 недель", description: "Размер авокадо", icon: "🥑", size: 16 },
  { week: 20, title: "20 недель", description: "Размер банана", icon: "🍌", size: 20 },
  { week: 24, title: "24 недели", description: "Размер кукурузы", icon: "🌽", size: 24 },
  { week: 28, title: "28 недель", description: "Размер баклажана", icon: "🍆", size: 28 },
  { week: 32, title: "32 недели", description: "Размер кокоса", icon: "🥥", size: 32 },
  { week: 36, title: "36 недель", description: "Размер дыни", icon: "🍈", size: 36 },
  { week: 40, title: "Рождение!", description: "Встреча с малышом", icon: "👶", size: 40 },
]

interface PregnancySliderFullProps {
  onComplete: () => void
}

export default function PregnancySliderFull({ onComplete }: PregnancySliderFullProps) {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (!isPlaying || isCompleted) return

    const interval = setInterval(() => {
      setCurrentWeek((prev) => {
        if (prev >= 40) {
          setIsCompleted(true)
          setIsPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, 800) // Немного быстрее для мобильных

    return () => clearInterval(interval)
  }, [isPlaying, isCompleted])

  const getCurrentStage = () => {
    return pregnancyStages.reduce((prev, current) => {
      return currentWeek >= current.week ? current : prev
    })
  }

  const currentStage = getCurrentStage()
  const progress = (currentWeek / 40) * 100

  const handleRestart = () => {
    setCurrentWeek(0)
    setIsCompleted(false)
    setIsPlaying(true)
  }

  return (
    <div className="py-4 max-h-40 overflow-hidden">
      {" "}
      {/* Ограничиваем высоту */}
      {/* Заголовок и управление */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
          >
            <Heart className="w-5 h-5 text-pink-500" />
          </motion.div>
          <h3 className="text-sm font-semibold text-gray-800 hidden sm:block">Путешествие к рождению</h3>
        </div>

        <div className="flex items-center gap-2">
          {!isCompleted ? (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 px-3 py-1 bg-pink-200 hover:bg-pink-300 rounded-full text-xs font-medium text-pink-700 transition-colors"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span className="hidden sm:inline">{isPlaying ? "Пауза" : "Играть"}</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                onClick={handleRestart}
                size="sm"
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-1 text-xs"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Повторить
              </Button>
              <Button onClick={onComplete} size="sm" variant="outline" className="rounded-full px-4 py-1 text-xs">
                Закрыть
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Прогресс бар */}
      <div className="relative mb-4">
        <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Индикатор текущей стадии */}
        <motion.div
          className="absolute -top-8 bg-white rounded-lg shadow-lg p-2 border border-pink-200 min-w-max"
          style={{ left: `${Math.min(Math.max(progress, 5), 95)}%` }}
          animate={{ x: "-50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              className="text-lg mb-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              {currentStage.icon}
            </motion.div>
            <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">{currentStage.title}</div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-white" />
        </motion.div>
      </div>
      {/* Информация о текущей стадии */}
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.week}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <div className="flex items-center justify-center gap-2">
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {currentStage.icon}
              </motion.span>
              <h4 className="text-sm font-bold text-gray-800">{currentStage.title}</h4>
            </div>

            <p className="text-xs text-gray-600 max-w-md mx-auto">{currentStage.description}</p>

            <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
              <span>Неделя: {currentWeek}/40</span>
              <span>•</span>
              <span>Прогресс: {Math.round(progress)}%</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Эффекты рождения */}
      {currentWeek === 40 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
