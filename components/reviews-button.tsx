"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ReviewsButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-dream-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Что говорят наши клиенты?</h2>

          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Прочитайте реальные отзывы родителей, которые уже получили портреты своих будущих малышей. Их истории
            вдохновляют нас создавать еще больше волшебства!
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/reviews">
              <Button
                size="lg"
                className="bg-gradient-to-r from-dream-500 to-dream-600 hover:from-dream-600 hover:to-dream-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Читать отзывы
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
