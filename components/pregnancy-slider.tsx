"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Play, Pause } from "lucide-react"

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

export default function PregnancySlider() {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isPlaying || !mounted) return

    const interval = setInterval(() => {
      setCurrentWeek((prev) => (prev >= 40 ? 0 : prev + 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, mounted])

  const getCurrentStage = () => {
    return pregnancyStages.reduce((prev, current) => {
      return currentWeek >= current.week ? current : prev
    })
  }

  const currentStage = getCurrentStage()
  const progress = (currentWeek / 40) * 100

  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-dream-50 via-white to-cream-50 border-b border-dream-100 sticky top-0 z-50 backdrop-blur-sm">
        <div className="w-full max-w-none mx-auto px-4 py-4">
          <div className="h-20 md:h-32 flex items-center justify-center">
            <div className="animate-pulse text-dream-500">Загрузка...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-dream-50 via-white to-cream-50 border-b border-dream-100 sticky top-0 z-50 backdrop-blur-sm overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {/* Header Controls */}
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
              className="flex-shrink-0"
            >
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-dream-500" />
            </motion.div>
            <h3 className="text-sm sm:text-lg font-semibold text-neutral-800 hidden md:block truncate">
              Путешествие к рождению
            </h3>
            <h3 className="text-xs font-semibold text-neutral-800 md:hidden truncate">Развитие малыша</h3>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2 sm:px-4 py-1 sm:py-2 bg-dream-200 hover:bg-dream-300 rounded-full text-xs sm:text-sm font-medium text-dream-700 transition-colors duration-200 flex-shrink-0"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Пауза</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Играть</span>
              </>
            )}
          </button>
        </div>

        <div className="relative w-full">
          {/* Progress Bar Background */}
          <div className="w-full h-2 sm:h-3 bg-dream-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-dream-300 via-dream-400 to-dream-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Week Markers - только на больших экранах */}
          <div className="absolute top-0 w-full h-2 sm:h-3 hidden lg:flex justify-between">
            {pregnancyStages.map((stage) => (
              <motion.div key={stage.week} className="relative" style={{ left: `${(stage.week / 40) * 100}%` }}>
                <motion.div
                  className={`w-3 h-3 sm:w-4 sm:h-4 -mt-0.5 rounded-full border-2 border-white shadow-sm ${
                    currentWeek >= stage.week ? "bg-dream-500" : "bg-dream-200"
                  }`}
                  animate={{
                    scale: currentWeek === stage.week ? 1.5 : 1,
                    boxShadow: currentWeek === stage.week ? "0 0 20px rgba(245, 123, 162, 0.6)" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Current Stage Indicator */}
          <motion.div
            className="absolute -top-12 sm:-top-16 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-dream-200 min-w-max max-w-xs"
            style={{ left: `${Math.min(Math.max(progress, 10), 90)}%` }}
            animate={{ x: "-50%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="text-center">
              <motion.div
                className="text-lg sm:text-2xl mb-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                {currentStage.icon}
              </motion.div>
              <div className="text-xs font-semibold text-neutral-800 whitespace-nowrap">{currentStage.title}</div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
          </motion.div>
        </div>

        {/* Current Stage Info */}
        <div className="mt-6 sm:mt-8 text-center px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.week}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-1 sm:space-y-2"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                <motion.span
                  className="text-xl sm:text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {currentStage.icon}
                </motion.span>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-800">{currentStage.title}</h4>
                <motion.span
                  className="text-xl sm:text-3xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  {currentStage.icon}
                </motion.span>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 px-2 max-w-md mx-auto">{currentStage.description}</p>

              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 flex-wrap">
                <span>Неделя: {currentWeek}/40</span>
                <span>•</span>
                <span>Прогресс: {Math.round(progress)}%</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Particles - только на больших экранах */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-dream-300 rounded-full opacity-60"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Special Effects for Birth - только на больших экранах */}
        {currentWeek === 40 && (
          <motion.div
            className="absolute inset-0 pointer-events-none hidden lg:block"
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
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-dream-400" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
